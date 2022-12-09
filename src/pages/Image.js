import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ImageDisplay from "../images/ImageDisplay";
import PixlyApi from "../api/api";
import ImageEditToolbar from "../images/ImageEditToolbar";
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


  const sliderSettings = {
    speed: 500,
    arrows: true,
    centerMode: true,
    dots: false,
    focusOnSelect: true,
    initialSlide: 1
  };

  return (
    <div className="Image">
      {currImage
        ? (
          <div className="row">
            <div className="col-md-6">
              <ImageDisplay image={currImage} />
            </div>
            <div className="col-md-6">
              <ImageEditToolbar image={currImage} />
            </div>


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
