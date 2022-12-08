import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Homepage from "../homepage/Homepage";
import ImageUpload from "../images/ImageUploadForm";

/** Site-wide routes.
 *
 * Currently, the entire site is available to all users.
 */

function RoutesList({ uploadImage }) {

  return (
    <div className="RoutesList">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/upload" element={<ImageUpload handleUpload={uploadImage} />} />
        <Route path="*" element={<Navigate to="/" />} />

      </Routes>
    </div>
  );
}

export default RoutesList;
