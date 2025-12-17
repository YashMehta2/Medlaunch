import { useState } from "react";
import StepNavigation from "../../StepNavigation";
import "./Step1.css";

export default function Step1() {
  const [legalName, setLegalName] = useState("");
  const [dbaName, setDbaName] = useState("");
  const [sameAsLegal, setSameAsLegal] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [title, setTitle] = useState("");
  const [workPhone, setWorkPhone] = useState("");
  const [cellPhone, setCellPhone] = useState("");
  const [email, setEmail] = useState("");

  return (
    <>
      <div className="s1-page">
        <div className="s1-card">
          <div className="s1-section">
            <h2 className="s1-sectionTitle">
              Identify Healthcare Organization
            </h2>

            <div className="s1-fieldGroup">
              <div className="s1-field">
                <label className="s1-label">Legal Entity Name</label>
                <span className="s1-required">*</span>
              </div>
              <input
                className="s1-input"
                type="text"
                value={legalName}
                onChange={(e) => {
                  const value = e.target.value;
                  setLegalName(value);
                  if (sameAsLegal) {
                    setDbaName(value);
                  }
                }}
              />
            </div>

            <div className="s1-fieldGroup">
              <div className="s1-field">
                <label className="s1-label">
                  Doing Business As (d/b/a) Name
                </label>
                <span className="s1-required">*</span>
              </div>
              <input
                className={`s1-input ${sameAsLegal ? "disabled" : ""}`}
                value={dbaName}
                onChange={(e) => setDbaName(e.target.value)}
                disabled={sameAsLegal}
                type="text"
              />
            </div>

            <div className="s1-checkboxRow">
              <label className="s1-checkbox">
                <input
                  type="checkbox"
                  checked={sameAsLegal}
                  onChange={(e) => {
                    const checked = e.target.checked;
                    setSameAsLegal(checked);

                    if (checked) {
                      setDbaName(legalName);
                    }
                  }}
                />
                <span>Same as Legal Entity Name</span>
              </label>
            </div>
          </div>

          <div className="s1-section">
            <h3 className="s1-subTitle">Primary Contact Information</h3>
            <p className="s1-subText">
              Primary contact receives all DNV Healthcare official
              communications
            </p>

            <div className="s1-grid2">
              <div className="s1-fieldGroup">
                <div className="s1-field">
                  <label className="s1-label">First Name</label>
                  <span className="s1-required">*</span>
                </div>
                <input
                  className="s1-input"
                  type="text"
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>

              <div className="s1-fieldGroup">
                <div className="s1-field">
                  <label className="s1-label">Last Name</label>
                  <span className="s1-required">*</span>
                </div>
                <input
                  className="s1-input"
                  type="text"
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
            </div>

            <div className="s1-fieldGroup">
              <div className="s1-field">
                <label className="s1-label">Title</label>
                <span className="s1-required">*</span>
              </div>
              <input
                className="s1-input"
                type="text"
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            <div className="s1-grid2">
              <div className="s1-fieldGroup">
                <div className="s1-field">
                  <label className="s1-label">Work Phone</label>
                  <span className="s1-required">*</span>
                </div>
                <input
                  className="s1-input"
                  type="tel"
                  onChange={(e) => setWorkPhone(e.target.value)}
                />
              </div>

              <div className="s1-fieldGroup">
                <div className="s1-field">
                  <label className="s1-label">Cell Phone</label>
                </div>
                <input
                  className="s1-input"
                  type="tel"
                  onChange={(e) => setCellPhone(e.target.value)}
                />
              </div>
            </div>

            <div className="s1-fieldGroup">
              <div className="s1-field">
                <label className="s1-label">Email</label>
                <span className="s1-required">*</span>
              </div>
              <input
                className="s1-input"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
        </div>
        <StepNavigation
          stepKey="step1"
          stepData={{
            legalName,
            dbaName,
            sameAsLegal,
            firstName,
            lastName,
            cellPhone,
            workPhone,
            title,
            email,
          }}
        />
      </div>
    </>
  );
}
