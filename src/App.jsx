import {
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import MyTickets from "./pages/MyTickets";
import AboutProject from "./pages/AboutProject";
import Events from "./pages/Events";

const App = () => {
  return (
    <BrowserRouter>
      <div className="container">
        <Navbar />
        <Routes>
          <Route path="/" element={<Events />} />
          <Route path="/my-tickets" element={<MyTickets />} />
          <Route path="/about" element={<AboutProject />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
