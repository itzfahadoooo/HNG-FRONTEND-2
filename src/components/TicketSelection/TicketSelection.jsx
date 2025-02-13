import { useState } from "react";
import "./TicketSelection.css";

const TicketSelection = ({ nextStep }) => {
  const [selectedTicket, setSelectedTicket] = useState(null);

  const tickets = [
    { type: "Free", price: 0, access: "REGULAR ACCESS", available: "20/52" },
    { type: "$150", price: 150, access: "VIP ACCESS", available: "20/52" },
    { type: "$150", price: 150, access: "VVIP ACCESS", available: "20/52" },
  ];
  const handleSelect = (access) => {
    setSelectedTicket(access);
  };

  return (
    <div className="ticket-selection">
      <div className="header">
        <div className="subheader">
          <h2>Ticket Selection</h2>
          <span className="step">Step 1/3</span>
        </div>
        <div className="progress-bar">
          <span></span>
        </div>
      </div>

      <div className="hero">
        <div className="hero1">
          <div className="hero11">
            <p>Techember Fest &apos;25</p>
            <p>
              Join us for an unforgettable experience at [Event Name]! Secure
              your spot now.
            </p>
          </div>

          <div className="hero12">
            <p>📍 [Event Location]</p>
            <p>||</p>
            <p>March 15, 2025 | 7:00 PM</p>
          </div>
        </div>
        <div className="progress-bar">
          <span></span>
        </div>

        <div className="ticket-options">
          <p className="select-tickettype">Select Ticket Type:</p>
          <div className="ticket-types">
            {tickets.map((ticket, index) => (
              <div
                key={index}
                className={`ticket-card ${
                  selectedTicket === ticket.access ? "selected" : ""
                }`}
                onClick={() => handleSelect(ticket.access)}
              >
                <h3>{ticket.type}</h3>
                <div>
                  <p>{ticket.access}</p>
                  <span>{ticket.available}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="dropdown">
          <label className="ticket-no" htmlFor="num-tickets">
            Number of Tickets
          </label>
          <select className="num-tickets" id="num-tickets">
            {[...Array(10)].map((_, index) => (
              <option className="num" key={index} value={index + 1}>
                {index + 1}
              </option>
            ))}
          </select>
        </div>

        <div className="actions">
          <button className="cancel">
            <p>Cancel</p>
          </button>
          <button
            className="next"
            onClick={nextStep}
            disabled={!selectedTicket}
          >
            <p>Next</p>
          </button>
        </div>
      </div>
    </div>
  );
};

import PropTypes from "prop-types";

TicketSelection.propTypes = {
  prevStep: PropTypes.func.isRequired,
  nextStep: PropTypes.func.isRequired,
};

export default TicketSelection;
