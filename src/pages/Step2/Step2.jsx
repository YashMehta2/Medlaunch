import { useState } from "react";
import StepNavigation from "../../StepNavigation";
import "./Step2.css";

export default function Step2() {
  const [facilityType, setFacilityType] = useState("");
  return (
    <>
      <div className="s2-page">
        <div className="s2-card">
          <div className="s2-section">
            <h2 className="s2-title">Facility and Organization Type</h2>

            <div className="s2-block">
              <div className="s2-labelRow">
                <span className="s2-label">Facility Type</span>
                <span className="s2-required">*</span>
              </div>

              <div
                className="s2-radioGroup"
                role="radiogroup"
                aria-label="Facility Type"
              >
                <label className="s2-radio">
                  <input
                    type="radio"
                    name="facilityType"
                    value="Short-Term Acute Care"
                    checked={facilityType === "Short-Term Acute Care"}
                    onChange={(e) => setFacilityType(e.target.value)}
                  />
                  <span>Short-Term Acute Care</span>
                </label>

                <label className="s2-radio">
                  <input
                    type="radio"
                    name="facilityType"
                    value="Long-Term Acute Care"
                    checked={facilityType === "Long-Term Acute Care"}
                    onChange={(e) => setFacilityType(e.target.value)}
                  />
                  <span>Long-Term Acute Care</span>
                </label>

                <label className="s2-radio">
                  <input
                    type="radio"
                    name="facilityType"
                    value="Critical Access"
                    checked={facilityType === "Critical Access"}
                    onChange={(e) => setFacilityType(e.target.value)}
                  />
                  <span>Critical Access</span>
                </label>

                <label className="s2-radio">
                  <input
                    type="radio"
                    name="facilityType"
                    value="Children's"
                    checked={facilityType === "Children's"}
                    onChange={(e) => setFacilityType(e.target.value)}
                  />
                  <span>Children&apos;s</span>
                </label>

                <label className="s2-radio">
                  <input
                    type="radio"
                    name="facilityType"
                    value="Free-Standing Psychiatric"
                    checked={facilityType === "Free-Standing Psychiatric"}
                    onChange={(e) => setFacilityType(e.target.value)}
                  />
                  <span>Free-Standing Psychiatric</span>
                </label>

                <label className="s2-radio">
                  <input
                    type="radio"
                    name="facilityType"
                    value="Other"
                    checked={facilityType === "Other"}
                    onChange={(e) => setFacilityType(e.target.value)}
                  />
                  <span>Other</span>
                </label>
              </div>
            </div>
          </div>
        </div>
        <StepNavigation
          stepKey="step2"
          stepData={{
            facilityType,
          }}
        />
      </div>
    </>
  );
}
