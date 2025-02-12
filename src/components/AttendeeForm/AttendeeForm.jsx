import { useState } from "react";
import "./AttendeeForm.css";

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
      <h2>
        Attendee Details <span className="step">Step 2/3</span>
      </h2>
      <div className="progress-bar">
        <div className="progress" style={{ width: "66%" }}></div>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="upload-section">
          <label htmlFor="photoUpload" className="upload-label">
            <div className="upload-box">Drag & drop or click to upload</div>
            <input
              type="file"
              id="photoUpload"
              onChange={handleFileChange}
              style={{ display: "none" }}
            />
          </label>
        </div>

        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Enter your email *"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <textarea
          name="request"
          placeholder="Special request?"
          value={formData.request}
          onChange={handleChange}
        ></textarea>

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
