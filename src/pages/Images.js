import React, { useState, useEffect } from "react";
import PixlyApi from "../api/api";
import ImagesMasonry from "../images/ImagesMasonry";
import LoadingSpinner from "../common/LoadingSpinner";

import "./Images.css";

function Images() {
  const [imagesList, setImagesList] = useState(null);

  useEffect(function getImagesOnMount() {
    getImagesBatch();
  }, []);

  /** Gets first 30 images from the API */
  async function getImagesBatch() {
    let images = await PixlyApi.getImages();
    setImagesList(images);
  }

  console.log("imagesList from Images page ------> ", imagesList);

  if (!imagesList) return <LoadingSpinner />;

  return (
    <div className="Images text-center">
      <ImagesMasonry images={imagesList.images} />
    </div>
  );
}

export default Images;
