import React, { useState } from "react";

/** Renders the image edit controls
 *
 * State: savingStatus --> shows loading icon during API requests
 */
function ImageEditToolbar({ imageId, handleRotate }) {

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

  return (
    <div className="ImageEditToolbar card">
      <div className="card-body">
        <button className="btn btn-secondary"
          type="submit"
          onClick={handleSubmitRotate}>
          Rotate
        </button>
      </div>
      <p>Toolbar</p>
    </div>
  );
}

export default ImageEditToolbar;