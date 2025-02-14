import { useState } from "react";
import PropTypes from "prop-types";

import axios from "axios";
import "./AttendeeForm.css";
import cloud from "../../assets/cloud.svg";
import envelope from "../../assets/envelope.svg";

const AttendeeForm = ({ onNext, onPrev, formData, setFormData }) => {
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setUploading(true);
    setError("");

    const formDataImage = new FormData();
    formDataImage.append("file", file);
    formDataImage.append("upload_preset", "ticket_generator");

    try {
      const res = await axios.post(
        "https://api.cloudinary.com/v1_1/dgjnp8gr0/image/upload",
        formDataImage
      );
      setFormData({
        ...formData,
        photoUrl: res.data.secure_url,
      });
      setUploading(false);
    } catch (err) {
      console.error(err);
      setError("Failed to upload image. Please try again.");
      setUploading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.photoUrl) {
      setError("Please upload a profile photo.");
      return;
    }
    onNext();
  };

  return (
    <div className="attendee-form">
      <div className="header">
        <div className="subheader">
          <h2>Attendee Details</h2>
          <span className="step">Step 2/3</span>
        </div>
        <div className="progress-bar2">
          <span></span>
        </div>
      </div>

      <form className="form" onSubmit={handleSubmit}>
        <div className="upload-section">
          <p className="upload-profile">Upload Profile Photo</p>

          <label htmlFor="photoUpload" className="upload-label">
            <div
              className="upload-box"
              style={{
                backgroundImage: formData.photoUrl
                  ? `url(${formData.photoUrl}), url('/path/to/selected-icon.png')`
                  : "none",
                backgroundSize: formData.photoUrl ? "cover, 40px" : "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <img className="cloud" src={cloud} alt="" />
              Drag & drop or click to upload
            </div>
            <input
              type="file"
              id="photoUpload"
              onChange={handleFileChange}
              style={{ display: "none" }}
            />
          </label>
          {uploading && <p>Uploading...</p>}
          {error && <p className="error">{error}</p>}
        </div>

        <div className="progress-bar">
          <span></span>
        </div>

        <div className="name">
          <p>Enter your name</p>
          <input
            type="text"
            name="name"
            // placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="email">
          <p className="enteremail">Enter your email *</p>
          <div>
            <img src={envelope} alt="" />

            <input
              type="email"
              name="email"
              placeholder="hello@avioflagos.io"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="special">
          <p>Special request?</p>

          <textarea
            name="request"
            placeholder="Textarea"
            value={formData.request}
            onChange={handleChange}
          ></textarea>
        </div>

        <div className="form-buttons">
          <button type="button" className="back-button" onClick={onPrev}>
            <p>Back</p>
          </button>
          <button type="submit" className="next-button" onClick={onNext}>
            <p>Get My Free Ticket</p>
          </button>
        </div>
      </form>
    </div>
  );
};

AttendeeForm.propTypes = {
  onPrev: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired,
  formData: PropTypes.object.isRequired,
  setFormData: PropTypes.func.isRequired,
};

export default AttendeeForm;
