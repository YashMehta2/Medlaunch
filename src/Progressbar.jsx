import { useLocation, useNavigate } from "react-router-dom";
import { STEPS } from "./steps.config";
import "./StepNavigation.css";

export default function ProgressBar() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const currentIndex = STEPS.findIndex((step) => step.path === pathname);

  return (
    <nav className="step-nav-action">
      {STEPS.map((step, index) => {
        const isActive = index === currentIndex;
        const isCompleted = index < currentIndex;

        return (
          <div
            key={step.id}
            className={`step-action ${isCompleted ? "completed" : ""}`}
            onClick={() => navigate(step.path)}
          >
            <div
              className={`step__circle-action ${
                isActive ? "active" : isCompleted ? "completed" : ""
              }`}
            >
              {step.id}
            </div>

            <span
              className={`step__label-action ${
                isActive || isCompleted ? "active" : ""
              }`}
            >
              {step.label}
            </span>
          </div>
        );
      })}
    </nav>
  );
}
