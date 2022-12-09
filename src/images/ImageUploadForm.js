import React, { useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import Alert from "../common/Alert";
import "./ImageUploadForm.css";

/** Form Component for uploading a new image
 *
 * Props: handleUpload() function from parent
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

  // const navigate = useNavigate();

  async function handleSubmit(evt) {
    evt.preventDefault();

    setSavingStatus("saving");

    // create FormData instance to pass into API
    const formData = new FormData();
    formData.append("image", imageInput);
    formData.append("title", imageFormData.title);
    formData.append("description", imageFormData.description);

    try {
      const newImage = await handleUpload(formData);
      // navigate()
    } catch (err) {
      setFormErrors(err);
      setSavingStatus("failed");
      console.log("errors ----> ", err);
      return;
    }

    setFormErrors([]);
    setSavingStatus("saved");
  }

  /** Handle image change from form, saving the file to state */
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
                    Uploading Image...
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
