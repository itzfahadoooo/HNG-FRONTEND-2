import { useState } from "react";
import AttendeeForm from "./components/AttendeeForm/AttendeeForm";
import Navbar from "./components/Navbar/Navbar";
import TicketSelection from "./components/TicketSelection/TicketSelection";
import PrintedTicket from "./components/PrintedTicket/PrintedTicket";

const App = () => {
  const [step, setStep] = useState(1);

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);
  return (
    <div>
      <div className="container">
        <Navbar />
        {step === 1 && <TicketSelection nextStep={nextStep} />}
        {step === 2 && <AttendeeForm nextStep={nextStep} prevStep={prevStep} />}
        {step === 3 && <PrintedTicket prevStep={prevStep} />}
      </div>
    </div>
  );
};

export default App;
