import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ImageDisplay from "../images/ImageDisplay";
import PixlyApi from "../api/api";

import Slider from "react-slick";
import "./Image.css";


/** PAGE that displays a single image and all of the related
 * components that can act of that image, or versions of it.
 */
function Image({ image }) {

  const params = useParams();

  const [currImage, setCurrImage] = useState(null);

  const imageId = params?.id || image?.id;
  console.log("imageId passed into API call ----> ", imageId);

  useEffect(function getImageDataOnMount() {
    async function getImageDataFromApi() {
      const imageData = await PixlyApi.getImageDetail(imageId);
      console.log("Image data for singleImage from API ----> ", imageData);
      setCurrImage(imageData);
    }
    getImageDataFromApi();
    console.log("*** In UseEffect in Image ****");
  }, []);

  console.log("image on state -----> ", currImage);




  const images = [
    "https://pixlyapp.s3.amazonaws.com/cdddbf62f7b44273bb31957152aa5814.jpeg",
    "https://pixlyapp.s3.amazonaws.com/da674ab56cf4408ab132af549095d25c.jpeg",
    "https://pixlyapp.s3.amazonaws.com/e6758e592eed4f0c92523b25ff975321.jpeg"
  ];

  const sliderSettings = {
    speed: 500,
    arrows: true,
    centerMode: true,
    dots: false,
    focusOnSelect: true,
    initialSlide: images.length - 1
  };

  return (
    <div className="Image">
      {currImage
        ? (
          <div className="row">
            <ImageDisplay image={currImage} />
          </div>
        ) : (
          <p>No image to display</p>
        )
      }

    </div>
  );
}

{/* <Slider {...sliderSettings}>
  <ImageDisplay image={currImage} />
</Slider> */}

export default Image;
