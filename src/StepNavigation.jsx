import { useNavigate, useLocation } from "react-router-dom";
import { useFormData } from "./FormContext";

export default function StepNavigation({ stepKey, stepData }) {
  const navigate = useNavigate();
  const location = useLocation();
  const { updateStepData } = useFormData();

  const handleContinue = () => {
    if (stepKey && stepData) {
      updateStepData(stepKey, stepData);
    }

    if (location.pathname === "/") navigate("/step-2");
    else if (location.pathname === "/step-2") navigate("/step-21");
    else if (location.pathname === "/step-21") navigate("/step-3");
    else if (location.pathname === "/step-3") navigate("/step-4");
    else if (location.pathname === "/step-4") navigate("/step-5");
    else if (location.pathname === "/step-5") navigate("/review");
  };

  const handleBack = () => {
    if (stepKey && stepData) {
      updateStepData(stepKey, stepData);
    }

    if (location.pathname === "/review") navigate("/step-5");
    else if (location.pathname === "/step-5") navigate("/step-4");
    else if (location.pathname === "/step-4") navigate("/step-3");
    else if (location.pathname === "/step-3") navigate("/step-21");
    else if (location.pathname === "/step-21") navigate("/step-2");
    else if (location.pathname === "/step-2") navigate("/");
  };

  return (
    <div className="step-nav">
      <div className="step-nav-inner">
        <button className="step-btn step-btn-outline" onClick={handleBack}>
          Exit
        </button>

        <div className="step-nav-right">
          <button
            className="step-btn step-btn-secondary"
            onClick={handleContinue}
          >
            Save
          </button>

          <button
            className="step-btn step-btn-primary"
            onClick={handleContinue}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}
