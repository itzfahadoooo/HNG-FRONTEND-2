import { useState } from "react";
import "./AttendeeForm.css";
import cloud from "../../assets/cloud.svg";
import envelope from "../../assets/envelope.svg";

const AttendeeForm = ({ prevStep, nextStep }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    request: "",
    photo: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      photo: e.target.files[0],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    nextStep();
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
            <div className="upload-box">
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
              placeholder="hello@avioflagos.io *"
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
          <button type="button" className="back-button" onClick={prevStep}>
            Back
          </button>
          <button type="submit" className="next-button">
            Get My Free Ticket
          </button>
        </div>
      </form>
    </div>
  );
};

import PropTypes from "prop-types";

AttendeeForm.propTypes = {
  prevStep: PropTypes.func.isRequired,
  nextStep: PropTypes.func.isRequired,
};

export default AttendeeForm;
