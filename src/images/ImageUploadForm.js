import React, { useState } from "react";
import Alert from "../common/Alert";
import "./ImageUploadForm.css";

/** Form Component for uploading a new image
 *
 */
function ImageUploadForm({ handleUpload }) {
  const [imageInput, setImageInput] = useState(null);

  const [imageFormData, setImageFormData] = useState({
    title: "",
    description: "",
  });

  //savingStatus can be: null, "saving", "failed", "saved"
  const [savingStatus, setSavingStatus] = useState(null);
  const [formErrors, setFormErrors] = useState([]);

  async function handleSubmit(evt) {
    evt.preventDefault();

    setSavingStatus("saving");

    console.log("event.target.title -----> ", evt.target.title);

    // create FormData instance to pass into API
    const formData = new FormData();
    formData.append("image", imageInput);
    formData.append("title", imageFormData.title);
    formData.append("description", imageFormData.description);

    [...formData.entries()].forEach((e) => console.log("********------>", e));

    try {
      await handleUpload(formData);
    } catch (err) {
      setFormErrors(err);
      setSavingStatus("failed");
      console.log("errors ----> ", err);
      return;
    }

    setImageFormData((f) => ({ ...f }));
    console.log("ImageFormData from state ----> ", imageFormData);
    setFormErrors([]);
    setSavingStatus("saved");
  }

  function handleChangeImage(evt) {
    const file = evt.target.files[0];
    setImageInput((f) => file);
  }

  /** Handle form data changing, saving values to state */
  function handleChangeFormData(evt) {
    const { name, value } = evt.target;
    setImageFormData((data) => ({
      ...data,
      [name]: value,
    }));
    setFormErrors([]);
  }

  return (
    <div className="ImageUploadForm">
      <div className="container col-md-6 offset-md-3 col-lg-4 offset-lg-4">
        <h2 className="mb-3">Upload an Image</h2>
        <div className="card">
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Image to Upload: </label>
                <input
                  className="form-control"
                  name="image"
                  type="file"
                  accept="image/*"
                  onChange={handleChangeImage}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Title: </label>
                <input
                  className="form-control"
                  type="text"
                  name="title"
                  value={imageFormData.title}
                  onChange={handleChangeFormData}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Description: </label>
                <input
                  className="form-control"
                  type="text"
                  name="description"
                  value={imageFormData.description}
                  onChange={handleChangeFormData}
                />
              </div>

              {formErrors.length ? (
                <Alert type="danger" messages={formErrors} />
              ) : null}

              <div className="d-grid">
                <button className="btn btn-primary" type="submit">
                  Submit
                </button>
                {savingStatus === "saving" && (
                  <p className="mt-3 text-center font-weight-bold">
                    Loading...
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImageUploadForm;
