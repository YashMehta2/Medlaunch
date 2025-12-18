import { useState } from "react";
import StepNavigation from "../../StepNavigation";
import "../Step2/Step2.css";

export default function Step21() {
  const [facilityType21, setFacilityType21] = useState("");

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
                    value="Same as Legal Entity Name"
                    checked={facilityType21 === "Same as Legal Entity Name"}
                    onChange={(e) => setFacilityType21(e.target.value)}
                  />
                  <span>Same as Legal Entity Name</span>
                </label>

                <label className="s2-radio">
                  <input
                    type="radio"
                    name="facilityType"
                    value="Critical Access"
                    checked={facilityType21 === "Critical Access"}
                    onChange={(e) => setFacilityType21(e.target.value)}
                  />
                  <span>Critical Access</span>
                </label>

                <label className="s2-radio">
                  <input
                    type="radio"
                    name="facilityType"
                    value="Children's"
                    checked={facilityType21 === "Children's"}
                    onChange={(e) => setFacilityType21(e.target.value)}
                  />
                  <span>Children&apos;s</span>
                </label>

                <label className="s2-radio">
                  <input
                    type="radio"
                    name="facilityType"
                    value="Long-Term Acute Care (LTAC)"
                    checked={facilityType21 === "Long-Term Acute Care (LTAC)"}
                    onChange={(e) => setFacilityType21(e.target.value)}
                  />
                  <span>Long-Term Acute Care (LTAC)</span>
                </label>

                <label className="s2-radio">
                  <input
                    type="radio"
                    name="facilityType"
                    value="Free-Standing Psychiatric"
                    checked={facilityType21 === "Free-Standing Psychiatric"}
                    onChange={(e) => setFacilityType21(e.target.value)}
                  />
                  <span>Free-Standing Psychiatric</span>
                </label>

                <label className="s2-radio">
                  <input
                    type="radio"
                    name="facilityType"
                    value="Other"
                    checked={facilityType21 === "Other"}
                    onChange={(e) => setFacilityType21(e.target.value)}
                  />
                  <span>Other</span>
                </label>
              </div>
            </div>
          </div>
        </div>
        <StepNavigation
          stepKey="step21"
          stepData={{
            facilityType21,
          }}
        />
      </div>
    </>
  );
}
