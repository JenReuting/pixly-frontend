import React from "react";

function ImageDisplay({ image }) {
  const imageUrl = `${image}`;

  const testImage =
    "https://pixlyapp.s3.amazonaws.com/1e6fa0c456044aeead063d97648a30e9.jpeg";

  return (
    <div className="ImageDisplay container">
      <div>
        <img src={testImage} alt="uploaded" />
      </div>
    </div>
  );
}

export default ImageDisplay;
