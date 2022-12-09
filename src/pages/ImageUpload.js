import React, { useEffect, useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import PixlyApi from "../api/api";
import ImageUploadForm from "../images/ImageUploadForm";
import Image from "./Image";

/** The PAGE component for uploading an image.
 *
 * State: currentImage (after upload)
 *
 *
 * Renders: NavBar and ImageUploadForm
 *
 * PixlyApp --> RoutesList --> ImageUpload --> ImageUploadForm
 */
function ImageUpload() {

  const [currImage, setCurrImage] = useState(null);
  const navigate = useNavigate();

  console.log("currImage in state -----> ", currImage);
  /** Redirect to Image (detail) page of image, once uploaded */

  // function goToUploadedImage() {
  //   navigate(`"/images/${currImage.id}"`);
  // }

  // useEffect(() => {
  //   if (currImage?.id) {
  //     const forwardingLink = `"/images/${currImage.id}"`;
  //     console.log("we are navigating to -> ", forwardingLink);
  //     navigate({
  //       to: forwardingLink
  //     });
  //   }
  // }, [currImage]);

  // const imageLink = currImage?.id ? `"/images/${currImage.id}"` : null;

  /** Uploads image to API and returns image object, including url */
  async function uploadImageToAPI(image) {
    let uploadedImage = await PixlyApi.postImage(image);
    setCurrImage(uploadedImage.image);
    return uploadedImage;
  }

  // console.log("imageLink before return ---> ", imageLink);

  return (
    <div className="ImageUpload">
      {currImage
        ? (
          <Navigate to={`/images/${currImage.id}`} />
        ) : (
          <ImageUploadForm handleUpload={uploadImageToAPI} />
        )
      }
    </div>
  );
}

{/* <Navigate to={imageLink} replace={true} /> */ }

export default ImageUpload;
