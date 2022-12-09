import React from "react";
import ImageCard from "./ImageCard";
import Masonry from "react-masonry-css";
import Box from '@mui/material/Box';
// import { styled } from '@mui/material/styles';
// import { Masonry, Button, Paper } from '../@mui/material';
import "./ImagesMasonry.css";

/**
 * Renders the masonry grid of all images.
 *
 * Param: images --> an array of all image objects
 *
 *
 * @param {images} images
 */
function ImagesMasonry({ images }) {

  // const breakpointColsObj = {
  //   default: 3,
  //   1100: 2,
  //   700: 1
  // };

  // const Item = styled(Paper)(({ theme }) => ({
  //   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  //   ...theme.typography.body2,
  //   padding: theme.spacing(1),
  //   textAlign: 'center',
  //   color: theme.palette.text.secondary,
  // }));

  console.log("images in ImagesMasonry -----> ", images);

  return (
    <div className="ImagesMasonry col-md-8 offset-md-2">
      {images.length
        ? (
          <div className="ImagesMasonry-list">
            <Box sx={{ width: 500, minHeight: 393 }}>
              <Masonry
                className="app-masonry-grid"
                columns={4}
                spacing={2}
              >
                {images.map(i => (
                  <div key={i.id}>
                    <ImageCard
                      url={i.url}
                      id={i.id}
                      title={i.title}
                    />
                  </div>
                ))}
              </Masonry>
            </Box>

          </div>
        ) : (
          <h5 className="empty">Sorry, no images were found!</h5>
        )}
    </div>

  );
}

export default ImagesMasonry;
