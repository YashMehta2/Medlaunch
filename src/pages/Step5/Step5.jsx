import { useState } from "react";
import "./Step5.css";
import StepNavigation from "../../StepNavigation";

export default function Step5() {
  const [selectedDates, setSelectedDates] = useState([]);
  const [selectedDatesapplication, setSelectedDatesapplication] = useState([]);
  const [selectedDatesstroke, setSelectedDatesstroke] = useState([]);
  const [selectedDatessecond, setSelectedDatessecond] = useState([]);
  const [selectedStandard, setSelectedStandard] = useState("");
  const [standards, setStandards] = useState([]);
  const [showOtherService, setShowOtherService] = useState(false);
  const [otherServices, setOtherServices] = useState([""]);

  return (
    <>
      <div className="s5-page">
        <div className="s5-card">
          <div className="s5-section">
            <div>
              <h2 className="s5-title">Service Offering</h2>
              <p className="s5-sub">Primary Site Service offering</p>
            </div>

            <button className="s5-linkBtn">All Services</button>

            <input
              type="text"
              className="s5-search"
              placeholder="Search services..."
            />

            <div className="s5-serviceGrid">
              <div className="s5-serviceCard">
                <h4>Emergency & Critical Care</h4>
                <label>
                  <input type="checkbox" /> Emergency Department
                </label>
                <label>
                  <input type="checkbox" /> Neonatal Intensive Care
                </label>
                <label>
                  <input type="checkbox" /> Pediatric Intensive Care
                </label>
              </div>

              <div className="s5-serviceCard">
                <h4>Cardiac Services</h4>
                <label>
                  <input type="checkbox" /> Cardiac Catheterization Lab
                </label>
                <label>
                  <input type="checkbox" /> Open Heart
                </label>
              </div>

              <div className="s5-serviceCard">
                <h4>Diagnostic Services</h4>
                <label>
                  <input type="checkbox" /> MRI
                </label>
                <label>
                  <input type="checkbox" /> Radiostereotactic
                </label>
              </div>
            </div>

            <button
              className="s5-outlineBtn"
              onClick={() => setShowOtherService(true)}
            >
              + Add Other Service
            </button>
          </div>
          {showOtherService && (
            <div className="s5-section">
              <h4 style={{ fontSize: "14px", fontWeight: 700 }}>
                Other Service
              </h4>

              {otherServices.map((service, index) => (
                <div
                  key={index}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  <input
                    className="s5-input"
                    placeholder="Specify other service"
                    value={service}
                    onChange={(e) => {
                      const updated = [...otherServices];
                      updated[index] = e.target.value;
                      setOtherServices(updated);
                    }}
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setOtherServices((prev) =>
                        prev.filter((_, i) => i !== index)
                      )
                    }
                    style={{
                      border: "none",
                      background: "transparent",
                      color: "#d11a2a",
                      fontSize: "18px",
                      cursor: "pointer",
                    }}
                  >
                    x
                  </button>
                </div>
              ))}
            </div>
          )}

          <div className="s5-section">
            <h2 className="s5-title">Standards to Apply</h2>

            <select
              className={`s5-select ${
                selectedStandard === "" ? "select-placeholder" : ""
              }`}
              value={selectedStandard}
              onChange={(e) => {
                const value = e.target.value;
                if (!value || standards.includes(value)) return;

                setStandards((prev) => [...prev, value]);
                setSelectedStandard("");
              }}
            >
              <option value="">Select Standard(s)</option>

              <option value="Action 1" className="s5-option-input">
                Action 1
              </option>
              <option value="Action 2" className="s5-option-input">
                Action 2
              </option>
              <option value="Action 3" className="s5-option-input">
                Action 3
              </option>
            </select>

            {standards.length > 0 && (
              <div className="s5-dateChips1">
                {standards.map((s, idx) => (
                  <div key={idx} className="s5-chip1">
                    {s}
                    <button
                      onClick={() =>
                        setStandards((prev) => prev.filter((_, i) => i !== idx))
                      }
                    >
                      x
                    </button>
                  </div>
                ))}
              </div>
            )}

            <div className="s5-grid2">
              <div className="s5-field">
                <label>Expiration Date of Current Stroke Certification</label>
                <input
                  type="date"
                  className="s5-input"
                  onChange={(e) => {
                    const value = e.target.value;
                    if (!value) return;

                    setSelectedDatesstroke((prev) => [...prev, value]);
                    e.target.value = "";
                  }}
                />
                {selectedDatesstroke.length > 0 && (
                  <div className="s5-dateChips">
                    {selectedDatesstroke.map((date, idx) => (
                      <div key={idx} className="s5-chip">
                        {new Date(date).toLocaleDateString()}
                        <button
                          onClick={() =>
                            setSelectedDatesstroke((prev) =>
                              prev.filter((_, i) => i !== idx)
                            )
                          }
                        >
                          x
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <div className="s5-field">
                <label>Date of Application</label>
                <input
                  type="date"
                  className="s5-input"
                  onChange={(e) => {
                    const value = e.target.value;
                    if (!value) return;

                    setSelectedDatesapplication((prev) => [...prev, value]);
                    e.target.value = "";
                  }}
                />
                {selectedDatesapplication.length > 0 && (
                  <div className="s5-dateChips">
                    {selectedDatesapplication.map((date, idx) => (
                      <div key={idx} className="s5-chip">
                        {new Date(date).toLocaleDateString()}
                        <button
                          onClick={() =>
                            setSelectedDatesapplication((prev) =>
                              prev.filter((_, i) => i !== idx)
                            )
                          }
                        >
                          x
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className="s5-field">
              <label>
                Dates of last twenty-five thrombolytic administrations
              </label>
              <input
                type="date"
                className="s5-input"
                onChange={(e) => {
                  const value = e.target.value;
                  if (!value) return;

                  setSelectedDates((prev) => [...prev, value]);
                  e.target.value = "";
                }}
              />
              {selectedDates.length > 0 && (
                <div className="s5-dateChips">
                  {selectedDates.map((date, idx) => (
                    <div key={idx} className="s5-chip">
                      {new Date(date).toLocaleDateString()}
                      <button
                        onClick={() =>
                          setSelectedDates((prev) =>
                            prev.filter((_, i) => i !== idx)
                          )
                        }
                      >
                        x
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="s5-field">
              <label>Dates of last fifteen thrombectomies</label>
              <input
                type="date"
                className="s5-input"
                onChange={(e) => {
                  const value = e.target.value;
                  if (!value) return;

                  setSelectedDatessecond((prev) => [...prev, value]);
                  e.target.value = "";
                }}
              />
              {selectedDatessecond.length > 0 && (
                <div className="s5-dateChips">
                  {selectedDatessecond.map((date, idx) => (
                    <div key={idx} className="s5-chip">
                      {new Date(date).toLocaleDateString()}
                      <button
                        onClick={() =>
                          setSelectedDatessecond((prev) =>
                            prev.filter((_, i) => i !== idx)
                          )
                        }
                      >
                        x
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
        <StepNavigation />
      </div>
    </>
  );
}
