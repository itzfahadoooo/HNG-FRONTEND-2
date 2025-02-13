import { useState } from "react";
import AttendeeForm from "./components/AttendeeForm/AttendeeForm";
import Navbar from "./components/Navbar/Navbar";
import TicketSelection from "./components/TicketSelection/TicketSelection";

const App = () => {
  const [step, setStep] = useState(1);

  const nextStep = () => setStep(prev => prev + 1);
  const prevStep = () => setStep(prev => prev - 1);
  return (
    <div>
      <div className="container">
        <Navbar />
        <TicketSelection nextStep={nextStep}/>
        <AttendeeForm nextStep={nextStep} prevStep={prevStep}/>
      </div>
    </div>
  );
};

export default App;
