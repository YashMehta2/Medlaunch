import StepNavigation from "../../StepNavigation";
import "./Step2.css";

export default function Step2() {
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
                  <input type="radio" name="facilityType" />
                  <span>Short-Term Acute Care</span>
                </label>

                <label className="s2-radio">
                  <input type="radio" name="facilityType" />
                  <span>Long-Term Acute Care</span>
                </label>

                <label className="s2-radio">
                  <input type="radio" name="facilityType" />
                  <span>Critical Access</span>
                </label>

                <label className="s2-radio">
                  <input type="radio" name="facilityType" />
                  <span>Children&apos;s</span>
                </label>

                <label className="s2-radio">
                  <input type="radio" name="facilityType" />
                  <span>Free-Standing Psychiatric</span>
                </label>

                <label className="s2-radio">
                  <input type="radio" name="facilityType" />
                  <span>Other</span>
                </label>
              </div>
            </div>
          </div>
        </div>
        <StepNavigation />
      </div>
    </>
  );
}
