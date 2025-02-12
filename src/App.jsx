import Navbar from "./components/Navbar/Navbar";
import TicketSelection from "./components/TicketSelection/TicketSelection";

const App = () => {
  return (
    <div>
      <div className="container">
        <Navbar />
        <TicketSelection />
      </div>
    </div>
  );
};

export default App;
