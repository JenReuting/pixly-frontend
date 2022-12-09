import React from "react";
import "./ImageDisplay.css";

/** Displays a single image in large format (for editing)
 *
 * props: entire image object
 * ex: { title, description, url, ext, file_name }
 *
 * Image Detail --> ImageDisplay
*/

function ImageDisplay({ image }) {

  console.log("ImageDisplay, image -----> ", image);

  return (
    <div className="ImageDisplay">
      <div>
        <img className="ImageDisplay-preview" src={image.url} alt={image.title} />
      </div>
    </div>
  );
}

export default ImageDisplay;
