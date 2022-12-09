import React, { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import RoutesList from "./routes-nav/RoutesList";
import NavBar from "./routes-nav/NavBar";

/**
 * Handles all of the high-level logic of the application.
 *
 * State:
 */

function PixlyApp() {
  return (
    <BrowserRouter>
      <NavBar />
      <RoutesList />
    </BrowserRouter>
  );
}

export default PixlyApp;
