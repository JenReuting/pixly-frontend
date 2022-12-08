import React, { useState } from "react";
import Alert from "../common/Alert";
import "./ImageUpload.css";


function ImageUploadForm({ handleUpload }) {

  // const [imageData, setImageData] = useState({
  //   image: {},
  //   title: "",
  //   description: ""
  // });
  const [image, setImage] = useState(null);
  const [imageLoading, setImageLoading] = useState(false);
  const [formErrors, setFormErrors] = useState([]);

  async function handleSubmit(evt) {
    evt.preventDefault();
    setImageLoading(true);

    const formData = new FormData();
    formData.append("image", image);

    [...formData.entries()].forEach(e => console.log(e));

    try {
      await handleUpload(formData);
      setImageLoading(false);
    } catch (err) {
      setFormErrors(err);
      setImageLoading(false);
      console.log("errors ----> ", err);
    }
  }

  /** Update form fields */
  function handleChange(evt) {
    // const { name, value } = evt.target;
    // setImageData(data => ({ ...data, [name]: value }));
    const file = evt.target.files[0];
    setImage(f => file);
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
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Title: </label>
                <input
                  className="form-control"
                  name="title"
                  type="text"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Description: </label>
                <input
                  className="form-control"
                  name="description"
                  type="text"
                />
              </div>

              {formErrors.length
                ? <Alert type="danger" messages={formErrors} />
                : null}

              <div className="d-grid">
                <button className="btn btn-primary" type="submit">Submit</button>
                {(imageLoading) && <p>Loading...</p>}
              </div>
            </form>
          </div>
        </div>

      </div>
    </div>

  );
}

export default ImageUploadForm;
