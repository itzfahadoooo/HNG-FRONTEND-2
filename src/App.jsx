import { useEffect, useState } from "react";
import AttendeeForm from "./components/AttendeeForm/AttendeeForm";
import Navbar from "./components/Navbar/Navbar";
import TicketSelection from "./components/TicketSelection/TicketSelection";
import PrintedTicket from "./components/PrintedTicket/PrintedTicket";

const App = () => {
  const [step, setStep] = useState(1);

  useEffect(() => {
    const savedStep = localStorage.getItem('currentStep');
    if (savedStep) {
      setStep(parseInt(savedStep));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('currentStep', step);
  }, [step]);

  const handleNextStep = () => {
    setStep(step + 1);
  };
  const handlePrevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };
  
  return (
    <div>
      <div className="container">
        <Navbar />
        {step === 1 && <TicketSelection onNext={handleNextStep} />}
        {step === 2 && <AttendeeForm onNext={handleNextStep} onPrev={handlePrevStep} />}
        {step === 3 && <PrintedTicket onPrev={handlePrevStep}  />}
      </div>
    </div>
  );
};

export default App;
