import { useEffect, useState } from "react";
import AttendeeForm from "../components/AttendeeForm/AttendeeForm";
import TicketSelection from "../components/TicketSelection/TicketSelection";
import PrintedTicket from "../components/PrintedTicket/PrintedTicket";

const Events = () => {
  const [step, setStep] = useState(1);
  const [selectedTicket, setSelectedTicket] = useState(() => {
    return localStorage.getItem("selectedTicket") || null;
  });

  const [numTickets, setNumTickets] = useState(() => {
    return parseInt(localStorage.getItem("numTickets")) || 1;
  });

  const [formData, setFormData] = useState(() => {
    const savedFormData = localStorage.getItem("formData");
    return savedFormData
      ? JSON.parse(savedFormData)
      : {
          name: "",
          email: "",
          request: "",
          photoUrl: "",
          ticketType: selectedTicket,
          numTickets: numTickets,
        };
  });

  useEffect(() => {
    const savedStep = localStorage.getItem("currentStep");
    if (savedStep) {
      setStep(parseInt(savedStep));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("currentStep", step);
  }, [step]);

  const handleNextStep = () => {
    setStep(step + 1);
  };

  const handlePrevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const goToTicketSelection = () => {
    setStep(1); // Set this to the step number for Ticket Selection
  };

  // Save data to localStorage when they change
  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(formData));
  }, [formData]);

  useEffect(() => {
    localStorage.setItem("selectedTicket", selectedTicket);
  }, [selectedTicket]);

  useEffect(() => {
    localStorage.setItem("numTickets", numTickets);
  }, [numTickets]);

  return (
    <div>
      {step === 1 && (
        <TicketSelection
          onNext={handleNextStep}
          selectedTicket={selectedTicket}
          setSelectedTicket={setSelectedTicket}
          numTickets={numTickets}
          setNumTickets={setNumTickets}
        />
      )}
      {step === 2 && (
        <AttendeeForm
          onNext={handleNextStep}
          onPrev={handlePrevStep}
          formData={formData}
          setFormData={setFormData}
        />
      )}
      {step === 3 && (
        <PrintedTicket
          onPrev={goToTicketSelection}
          formData={formData}
          numTickets={numTickets}
          selectedTicket={selectedTicket}
        />
      )}
    </div>
  );
};

export default Events;
