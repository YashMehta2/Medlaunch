import { Routes, Route, Navigate } from "react-router-dom";
import Step1 from "./pages/Step1/Step1.jsx";
import Step2 from "./pages/Step2/Step2.jsx";
import Step3 from "./pages/Step3/Step3.jsx";
import Review from "./pages/Review/Review.jsx";
import Step21 from "./pages/Step2-1/Step21.jsx";
import Step4 from "./pages/Step4/Step4.jsx";
import Step5 from "./pages/Step5/Step5.jsx";
import { FormProvider } from "./FormContext.jsx";
import ProgressHeader from "./ProgressHeader.jsx";

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar__left">
        <div className="navbar__brand">DNV Healthcare</div>
      </div>

      <div className="navbar__right"></div>
    </header>
  );
}

export default function App() {
  return (
    <>
      <FormProvider>
        <Navbar />
        <ProgressHeader />
        <button class="support-chat-btn">💬 Support Chat</button>
        <Routes>
          <Route path="/" element={<Step1 />} />
          <Route path="/step-2" element={<Step2 />} />
          <Route path="/step-21" element={<Step21 />} />
          <Route path="/step-3" element={<Step3 />} />
          <Route path="/step-4" element={<Step4 />} />
          <Route path="/step-5" element={<Step5 />} />
          <Route path="/review" element={<Review />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </FormProvider>
    </>
  );
}
