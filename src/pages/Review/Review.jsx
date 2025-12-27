import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Review.css";
import StepNavigation from "../../StepNavigation";

function Section({ title, editPath, children }) {
  const [open, setOpen] = useState(true);
  const navigate = useNavigate();

  return (
    <div className="review-section">
      <div className="review-header" onClick={() => setOpen(!open)}>
        <span>
          {open ? "▾" : "▸"} {title}
        </span>
        <button
          onClick={(e) => {
            e.stopPropagation();
            navigate(editPath);
          }}
        >
          Edit
        </button>
      </div>

      {open && <div className="review-body">{children}</div>}
    </div>
  );
}

export default function Review() {
  return (
    <div className="review-page">
      <Section title="Basic Information" editPath="/">
        <p>
          <b>Legal Entity</b>
        </p>
        <p>
          <b>DBA</b>{" "}
        </p>
        <p>
          <b>Primary Contact</b>{" "}
        </p>
        <p>
          <b>Email</b>{" "}
        </p>
      </Section>

      <Section title="Facility Details" editPath="/step-2">
        <p>
          <b>Facility Type</b>
        </p>
      </Section>

      <Section title="Leadership Contacts" editPath="/step-3">
        <p>
          <b>CEO</b>
        </p>
        <p>
          <b>Director of Quality</b>
        </p>
        <p>
          <b>Invoicing Contact</b>
        </p>
      </Section>

      <Section title="Site Information" editPath="/step-4">
        <p>
          <b>Site Configuration</b>
        </p>
        <p>
          <b>Input Method</b>
        </p>
      </Section>

      <Section title="Services & Certifications" editPath="/step-5">
        <p>
          <b>Services Provided</b>
        </p>
        <div className="pill-row"></div>

        <p>
          <b>Standards to Apply</b>
        </p>
        <div className="pill-row"></div>

        <p>
          <b>Date of Application</b>
        </p>
        <div className="pill-row"></div>

        <p>
          <b>Expiration Date of Current Stroke Certification</b>
        </p>
        <div className="pill-row"></div>

        <p>
          <b>Dates of last twenty-five thrombolytic administrations</b>
        </p>
        <div className="pill-row"></div>

        <p>
          <b>Dates of last fifteen thrombectomies</b>
        </p>
        <div className="pill-row"></div>
      </Section>
      <div className="review-submit">
        <h3 className="submit-title">Ready to Submit?</h3>

        <label className="checkbox-line">
          <input type="checkbox" />I certify that all information provided is
          accurate and complete to the best of my knowledge
        </label>

        <p className="submit-description">
          By submitting this form, you agree to our terms and conditions. DNV
          will review your application and contact you within 2–3 business days.
        </p>

        <div className="submit-actions">
          <button className="secondary-btn">Download as PDF</button>
          <button className="secondary-btn">Export to CSV</button>
        </div>
      </div>
      <StepNavigation />
    </div>
  );
}
