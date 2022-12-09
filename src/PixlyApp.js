import React, { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import RoutesList from "./routes-nav/RoutesList";
import NavBar from "./routes-nav/NavBar";
import PixlyApi from "./api/api";

/**
 * Handles all of the high-level logic of the application.
 * The "brain" of the app.
 *
 * State: Image object
 */

function PixlyApp() {
  const [currImage, setCurrImage] = useState(null);

  /** Gets 30 first images from API endpoint */
  async function uploadImage(image) {
    let uploadedImage = await PixlyApi.postImage(image);
    setCurrImage(uploadedImage);
  }

  return (
    <BrowserRouter>
      <NavBar />
      <RoutesList uploadImage={uploadImage} />
    </BrowserRouter>
  );
}

export default PixlyApp;
