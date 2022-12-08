import React from "react";

function ImageDisplay(image) {
  const imageUrl = `"${image}"`;

  console.log("Image to display-------> ", imageUrl);

  return (
    <div className="ImageDisplay container">
      <div>
        <img src={imageUrl} alt="uploaded image" />
      </div>
    </div>
  );
}

export default ImageDisplay;
