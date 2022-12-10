import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ImageDisplay from "../images/ImageDisplay";
import PixlyApi from "../api/api";
import ImageEditToolbar from "../images/ImageEditToolbar";
import "./Image.css";


/** PAGE that displays a single image and all of the related
 * components that can act of that image, or versions of it.
 */
function Image() {

  const params = useParams();

  const [currImage, setCurrImage] = useState(null);
  const [changes, setChanges] = useState([]);

  useEffect(function getImageDataOnRender() {
    async function getImageDataFromApi() {
      const imageData = await PixlyApi.getImageDetail(params.id);
      setCurrImage(imageData.image);
    }
    getImageDataFromApi();
  }, [changes]);

  /** Calls to API to rotate image and return new image link */
  async function handleRotate() {
    await PixlyApi.updateImage(currImage.id, { change: "rotate" });
    setChanges(c => [...c, "rotate"]);
    window.location.reload();
  }

  /** Calls to API to convert image to b&w and return new image link */
  async function handleBW() {
    await PixlyApi.updateImage(currImage.id, { change: "bw" });
    setChanges(c => [...c, "bw"]);
    window.location.reload();
  }

  /** Calls to API to convert image to sepia and return new image link */
  async function handleSepia() {
    await PixlyApi.updateImage(currImage.id, { change: "sepia" });
    setChanges(c => [...c, "sepia"]);
    window.location.reload();
  }

  function handleEditSubmit() {
    //this will create a new object in the database with changed image
    //setCurrImage to new returned image
    // clear out currImageEdits
  }

  return (
    <div className="Image">
      {currImage
        ? (
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-6">
                <ImageDisplay image={currImage} />
              </div>
              <div className="col-md-6">
                <ImageEditToolbar
                  handleRotate={handleRotate} handleBW={handleBW} handleSepia={handleSepia} />
              </div>
            </div>
            <div className="row">

            </div>
          </div>
        ) : (
          <p></p>
        )
      }

    </div>
  );
}

{/* <Slider {...sliderSettings}>
  <ImageDisplay image={currImage} />
</Slider> */}

export default Image;
