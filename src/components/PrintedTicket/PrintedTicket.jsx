import "./PrintedTicket.css";
import PropTypes from "prop-types";

const PrintedTicket = ({ prevStep }) => {
  return (
    <div className="ticket-ready">
      <div className="header">
        <div className="subheader">
          <h2>Ready</h2>
          <span className="step">Step 3/3</span>
        </div>
        <div className="progress-bar">
          <span></span>
        </div>
      </div>

      <div className="ticket-container">
        <div className="cont1">
          <h2>Your Ticket is Booked!</h2>
          <p>
            Check your email for a copy or you can{" "}
            <span className="download-text">download</span>
          </p>
        </div>

        <div className="ticket-card">
          <h3>Techember Fest &apos;25</h3>
          <p>7 Olarewaju road, Ikeja, Lagos</p>
          <p>March 15, 2025 | 7:00 PM</p>

          <div className="ticket-image">
            <img src="https://via.placeholder.com/150" alt="Profile" />
          </div>

          <div className="ticket-info">
            <div className="info-group">
              <span className="label">Name:</span>
              <span className="value">Avi Chukwu</span>
            </div>
            <div className="info-group">
              <span className="label">Email:</span>
              <span className="value">user@email.com</span>
            </div>
            <div className="info-group">
              <span className="label">Ticket Type:</span>
              <span className="value">VIP</span>
            </div>
            <div className="info-group">
              <span className="label">Special Request:</span>
              <span className="value">None</span>
            </div>
          </div>

          <div className="barcode">
            <div className="barcode-number">234567</div>
            <div className="barcode-number">891026</div>
          </div>
        </div>

        <div className="ticket-buttons">
          <button className="back-button" onClick={prevStep}>
            Book Another Ticket
          </button>
          <button className="download-button">Download Ticket</button>
        </div>
      </div>
    </div>
  );
};

PrintedTicket.propTypes = {
  prevStep: PropTypes.func,
};

export default PrintedTicket;
