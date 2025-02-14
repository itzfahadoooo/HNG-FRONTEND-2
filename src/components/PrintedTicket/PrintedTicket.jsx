import "./PrintedTicket.css";
import PropTypes from "prop-types";
import ticket from "../../assets/bg.svg";
import barcode from "../../assets/Bar Code.svg";

import html2canvas from "html2canvas";

const PrintedTicket = ({ onPrev, formData,numTickets,selectedTicket }) => {
  const handleDownload = () => {
    const ticketElement = document.querySelector(".cont2");
    html2canvas(ticketElement, {
      useCORS: true, 
      backgroundColor: null, // Preserve transparent background
      scale: 2 // Higher resolution image
    }).then((canvas) => {
      const link = document.createElement("a");
      link.href = canvas.toDataURL("image/png");
      link.download = "ticket.png";
      link.click();
    });
  };
  
  return (
    <div className="ticket-ready">
      <div className="header">
        <div className="subheader">
          <h2>Ready</h2>
          <span className="step">Step 3/3</span>
        </div>
        <div className="progress-bar3">
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

                <img className="ticket-image-2" src={formData.photoUrl || "https://via.placeholder.com/150"} alt="Profile" />

              <div className="ticket-info">
                <div className="box">
                  <div className="info-group">
                    <span className="label">Enter your name</span>
                    <span className="value">{formData.name}</span>
                  </div>
                  <div className="info-group2">
                    <span className="label">Enter your email *</span>
                    <span className="value-email">{formData.email}</span>
                  </div>
                </div>

                <div className="box">
                  <div className="info-group">
                    <span className="label">Ticket Type:</span>
                    <span className="value2">{selectedTicket}</span>
                  </div>
                  <div className="info-group">
                    <span className="label">Ticket For:</span>
                    <span className="value2">{numTickets}</span>
                  </div>
                </div>
                <span className="label">Special Request? </span>
                <span className="value2">
                {formData.request || "No special requests"}
                </span>
              </div>
            </div>
            <div className="barcode">
              <img src={barcode} alt="" />
            </div>
          </div>

        </div>
          <div className="ticket-buttons">
            <button className="back-button" onClick={onPrev}>
              <p>Book Another Ticket</p>
            </button>
            <button className="download-button" onClick={handleDownload}> <p>Download Ticket</p></button>
          </div>
      </div>
    </div>
  );
};

PrintedTicket.propTypes = {
  onPrev: PropTypes.func,
  formData: PropTypes.object.isRequired,
  numTickets: PropTypes.object.isRequired, 
  selectedTicket: PropTypes.object.isRequired,
};

export default PrintedTicket;
