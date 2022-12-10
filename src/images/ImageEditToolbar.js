import React, { useState } from "react";
import "./ImageEditToolbar.css";

/** Renders the image edit controls
 *
 * State: savingStatus --> shows loading icon during API requests
 */
function ImageEditToolbar({ handleRotate, handleBW, handleSepia }) {

  //savingStatus can be: null, "saving", "failed", "saved"
  const [savingStatus, setSavingStatus] = useState(null);
  const [formErrors, setFormErrors] = useState([]);
  /**
   * Rotate - add a form field for degrees
   * Black & White -
   * Sepia Tone -
   */

  function handleSubmitRotate(evt) {
    evt.preventDefault();
    setSavingStatus("saving");
    try {
      handleRotate();
    } catch (err) {
      setFormErrors(err);
      setSavingStatus("failed");
      console.log("errors from Edit Toolbar ----> ", err);
      return;
    }
    setSavingStatus("saved");
    setFormErrors([]);
  }

  function handleSubmitBW(evt) {
    evt.preventDefault();
    setSavingStatus("saving");
    try {
      handleBW();
    } catch (err) {
      setFormErrors(err);
      setSavingStatus("failed");
      console.log("errors from Edit Toolbar ----> ", err);
      return;
    }
    setSavingStatus("saved");
    setFormErrors([]);
  }

  function handleSubmitSepia(evt) {
    evt.preventDefault();
    setSavingStatus("saving");
    try {
      handleSepia();
    } catch (err) {
      setFormErrors(err);
      setSavingStatus("failed");
      console.log("errors from Edit Toolbar ----> ", err);
      return;
    }
    setSavingStatus("saved");
    setFormErrors([]);
  }

  return (
    <div className="ImageEditToolbar">
      <div className="card">
        <div className="card-body">
          <div className="edit-tool">
            <button className="btn btn-primary m-3"
              type="submit"
              onClick={handleSubmitRotate}>
              Rotate
            </button>
          </div>
          <div className="edit-tool">
            <button className="btn btn-primary m-3"
              type="submit"
              onClick={handleSubmitBW}>
              Convert to Black & White
            </button>
          </div>
          <div className="edit-tool">
            <button className="btn btn-primary m-3"
              type="submit"
              onClick={handleSubmitSepia}>
              Convert to Sepia
            </button>
          </div>

        </div>
      </div>
      {savingStatus === "saving" && (
        <p className="mt-3 text-center font-weight-bold">
          Editing Image...
        </p>
      )}
    </div>
  );
}

export default ImageEditToolbar;