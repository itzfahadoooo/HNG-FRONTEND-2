import "./PrintedTicket.css";
import PropTypes from "prop-types";
import ticket from "../../assets/bg.svg";
import barcode from "../../assets/Bar Code.svg";

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

        <div className="cont2">
          <img src={ticket} className="ticket-img" alt="" />
          <div className="ticket-card">
            <div className="cont3">
              <div className="event-title">
                <h3>Techember Fest ”25</h3>
                <div className="address">
                  <p>📍 04 Rumens road, Ikoyi, Lagos</p>
                  <p>📅 March 15, 2025 | 7:00 PM</p>
                </div>
              </div>

              <div className="ticket-image-1">
                <img src="https://via.placeholder.com/150" alt="Profile" />
              </div>

              <div className="ticket-info">
                <div className="box">
                  <div className="info-group">
                    <span className="label">Enter your name</span>
                    <span className="value">Avi Chukwu</span>
                  </div>
                  <div className="info-group2">
                    <span className="label">Enter your email *</span>
                    <span className="value">user@email.com</span>
                  </div>
                </div>

                <div className="box">
                  <div className="info-group">
                    <span className="label">Ticket Type:</span>
                    <span className="value">VIP</span>
                  </div>
                  <div className="info-group">
                    <span className="label">Ticket For:</span>
                    <span className="value">1</span>
                  </div>
                </div>
                <span className="label">Special Request? </span>
                <span className="value">
                  Nil ? Or the users sad story they write in there gets{" "}
                </span>
              </div>
            </div>
            <div className="barcode">
              <img src={barcode} alt="" />
            </div>
          </div>

          <div className="ticket-buttons">
            <button className="back-button" onClick={prevStep}>
              <p>Book Another Ticket</p>
            </button>
            <button className="download-button"> <p>Download Ticket</p></button>
          </div>
        </div>
      </div>
    </div>
  );
};

PrintedTicket.propTypes = {
  prevStep: PropTypes.func,
};

export default PrintedTicket;
