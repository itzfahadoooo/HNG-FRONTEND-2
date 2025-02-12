import { useState } from "react";
import "./TicketSelection.css"
const TicketSelection = () => {
    const [selectedTicket, setSelectedTicket] = useState(null);

    const tickets = [
        { type: "Free", price: 0, access: "REGULAR ACCESS", available: "20/52" },
        { type: "$150", price: 150, access: "VIP ACCESS", available: "20/52" },
        { type: "$150", price: 150, access: "VIP ACCESS", available: "20/52" }
    ];
    const handleSelect = (type) => {
        setSelectedTicket(type);
    };

  return (
      <div className="ticket-selection">
          <h2>Ticket Selection</h2>
            <p>Techember Fest &apos;25</p>
            <p>Join us for an unforgettable experience at [Event Name]! Secure your spot now.</p>
          <p>[Event Location] || March 15, 2025 | 7:00 PM</p>
          
          <div className="ticket-options">
                {tickets.map((ticket, index) => (
                    <div
                        key={index}
                        className={`ticket-card ${selectedTicket === ticket.type ? "selected" : ""}`}
                        onClick={() => handleSelect(ticket.type)}
                    >
                        <h3>{ticket.type}</h3>
                        <p>{ticket.access}</p>
                        <span>{ticket.available}</span>
                    </div>
                ))}
          </div>
          
          <div className="dropdown">
                <label htmlFor="num-tickets">Number of Tickets</label>
                <select id="num-tickets">
                    {[...Array(10)].map((_, index) => (
                        <option key={index} value={index + 1}>
                            {index + 1}
                        </option>
                    ))}
                </select>
          </div>
          
          <div className="actions">
                <button className="cancel">Cancel</button>
                <button className="next" disabled={!selectedTicket}>
                    Next
                </button>
          </div>
          
          
      </div>
      
      
  )
}

export default TicketSelection