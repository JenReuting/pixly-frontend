import React from "react";
import ImageDisplay from "../images/ImageDisplay";

/** PAGE that displays a single image and all of the related
 * components that can act of that image, or versions of it.
 */
function Image({ currImage }) {
  return (
    <div className="Image">
      <p>Image page component</p>
      <ImageDisplay currImage={currImage} />
    </div>
  );
}

export default Image;
