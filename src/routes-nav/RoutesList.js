import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Homepage from "../pages/Homepage";
import Images from "../pages/Images";
import Image from "../pages/Image";
import ImageUpload from "../pages/ImageUpload";

/** Site-wide routes.
 *
 * Currently, the entire site is available to all users.
 */

function RoutesList({ uploadImage }) {
  return (
    <div className="RoutesList">
      <Routes>
        <Route path="/" element={<Homepage />} />

        <Route path="/images/:id" element={<Image />} />
        <Route path="/images" element={<Images />} />

        <Route
          path="/upload"
          element={<ImageUpload handleUpload={uploadImage} />}
        />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default RoutesList;
