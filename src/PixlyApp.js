import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import RoutesList from "./routes-nav/RoutesList";
import PixlyApi from "./api/api";

/**
 * Handles all of the high-level logic of the application.
 * The "brain" of the app.
 *
 * State: Image object
 */

function PixlyApp() {
  const [currImage, setCurrImage] = useState(null);

  async function uploadImage(image) {
    let uploadedImage = await PixlyApi.postImage(image);
    setCurrImage(uploadedImage);
  }

  return (
    <BrowserRouter>
      <RoutesList uploadImage={uploadImage} />
    </BrowserRouter>
  );
}

export default PixlyApp;
