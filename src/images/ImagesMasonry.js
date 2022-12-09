import React from "react";
import ImageCard from "./ImageCard";

/**
 * Renders the masonry grid of all images.
 *
 * Param: images --> an array of all image objects
 *
 *
 * @param {images} images
 */
function ImagesMasonry({ images }) {

  return (
    <div className="ImagesMasonry col-md-8 offset-md-2">
      {images.length
        ? (
          <div className="ImagesMasonry-list">
            {images.map(i => (
              <ImageCard
                key={i.id}
                url={i.url}
                id={i.id}
                title={i.title}
              />
            ))}
          </div>
        ) : (
          <h5 className="empty">Sorry, no images were found!</h5>
        )}
    </div>

  );
}

export default ImagesMasonry;
