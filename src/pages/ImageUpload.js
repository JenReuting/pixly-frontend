import React from "react";
import ImageUploadForm from "../images/ImageUploadForm";

/** The PAGE component for uploading an image.
 *
 * Props: handleUpload() function from parent
 *
 * Renders: NavBar and ImageUploadForm
 *
 * PixlyApp --> RoutesList --> ImageUpload --> ImageUploadForm
 */
function ImageUpload({ handleUpload }) {
  return (
    <div className="ImageUpload">
      <ImageUploadForm handleUpload={handleUpload} />;
    </div>
  );
}

export default ImageUpload;
