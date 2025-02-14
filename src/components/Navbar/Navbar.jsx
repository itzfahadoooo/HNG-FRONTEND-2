import "./Navbar.css";
import logo1 from "../../assets/hugeicons_ticket-01.svg";
import logo2 from "../../assets/ticz.svg";
import arrow from "../../assets/Line 5.png";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navitem1">
        <span>
          <img src={logo1} className="logo1" alt="" />
        </span>
        <img src={logo2} className="logo2" alt="" />
      </div>

      <div className="navitem2">
        <Link to="/" style={{ textDecoration: "none" }}>
          <p>Events</p>
        </Link>

        <Link to="/my-tickets">
          <p>My Tickets</p>
        </Link>

        <Link to="/about">
          <p>About Project</p>
        </Link>
      </div>

      <div className="navitem3">
        <Link to="/my-tickets">
          <button className="button">
            <p>My Tickets</p>
            <span>
              <img src={arrow} alt="" />
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
