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
function Image() {

  const params = useParams();

  const [currImage, setCurrImage] = useState(null);

  // { edit, newLink }
  // edit possible values: "original", "rotate", "bw", "sepia"
  const [currImageEdits, setCurrImageEdits] = useState([{
    edit: "original",
    imageId: params.id
  }]);

  // const imageId = params?.id || image?.id;

  useEffect(function getImageDataOnMount() {
    async function getImageDataFromApi() {
      const imageData = await PixlyApi.getImageDetail(params.id);
      setCurrImage(imageData.image);
    }
    getImageDataFromApi();
    console.log("currImage on Mount ----> ", currImage);
  }, [currImageEdits]);

  /** Calls to API to rotate image and return new image link */
  async function handleRotate() {
    const editedImage = await PixlyApi.updateImage(currImage.id, { change: "rotate" });
    console.log("editedImage-----> ", editedImage);
    setCurrImage(i => editedImage.image);
    setCurrImageEdits(s => [...s, { edit: "rotate", imageId: editedImage.image.id }]);
    console.log("currImageEdits ------> ", currImageEdits);
  }


  function handleEditSubmit() {
    //this will create a new object in the database with changed image
    //setCurrImage to new returned image
    // clear out currImageEdits
  }


  const sliderSettings = {
    speed: 500,
    arrows: true,
    centerMode: true,
    dots: false,
    focusOnSelect: true,
    initialSlide: 1
  };

  console.log("currImage -------> ******", currImage);

  return (
    <div className="Image">
      {currImage
        ? (
          <div className="row">
            <div className="col-md-6">
              <ImageDisplay image={currImage} />
            </div>
            <div className="col-md-6">
              <ImageEditToolbar
                image={currImage.id}
                handleRotate={handleRotate}
                imageEdits={currImageEdits} />
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
