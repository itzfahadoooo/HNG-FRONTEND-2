import "./Navbar.css";
import logo1 from "../../assets/hugeicons_ticket-01.svg";
import logo2 from "../../assets/ticz.svg";
import arrow from "../../assets/Line 5.svg"
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
        <p>
          <a>Events</a>
        </p>
        <p>
          <a>My Tickets</a>
        </p>
        <p>
          <a>About Project</a>
        </p>
      </div>

      <div className="navitem3">
        <button className="button"><p>My Tickets</p><span><img src={arrow} alt="" /></span></button>
      </div>
    </div>
  );
};

export default Navbar;
