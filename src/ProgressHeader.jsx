import { useLocation } from "react-router-dom";
import { STEPS } from "./steps.config";
import ProgressBar from "./Progressbar";

export default function ProgressHeader() {
  const { pathname } = useLocation();

  const currentIndex = STEPS.findIndex((step) => step.path === pathname);

  return (
    <div className="progress-header">
      <div className="progress-header__top">
        <h1 className="progress-title">New DNV Quote Request</h1>

        <span className="progress-step-count">
          Step {currentIndex + 1} of {STEPS.length}
        </span>
      </div>
      <ProgressBar />
    </div>
  );
}
