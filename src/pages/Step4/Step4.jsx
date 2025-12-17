import { useRef, useState } from "react";
import "./Step4.css";
import StepNavigation from "../../StepNavigation";

export default function Step4() {
  const [siteMode, setSiteMode] = useState("single");
  const [files, setFiles] = useState([]);
  const [uploadCsv, setuploadCsv] = useState(false);
  const [activeFileId, setActiveFileId] = useState(null);
  const fileInputRef = useRef(null);

  function handlecsvclick() {
    setuploadCsv(!uploadCsv);
  }

  const onPickFile = () => fileInputRef.current?.click();

  const onFileChange = (e) => {
    const picked = Array.from(e.target.files || []);
    if (!picked.length) return;

    const mapped = picked.map((f) => ({
      id: `${f.name}-${f.size}-${f.lastModified}`,
      name: f.name,
      size: f.size,
      lastModified: f.lastModified,
      progress: 100,
    }));

    setFiles((prev) => {
      const next = [...prev, ...mapped];
      setActiveFileId(mapped[mapped.length - 1].id);
      return next;
    });

    // allow selecting same file again
    e.target.value = "";
  };

  const removeFile = (id) =>
    setFiles((prev) => prev.filter((f) => f.id !== id));

  const prettySize = (bytes) => {
    const mb = bytes / (1024 * 1024);
    return `${mb.toFixed(1)}MB`;
  };

  return (
    <>
      <div className="s4-page">
        <div className="s4-card">
          {/* SECTION 1 */}
          <h2 className="s4-title">Do you have multiple sites or locations?</h2>

          <div className="s4-choiceRow">
            <button
              type="button"
              className={`s4-choiceCard ${
                siteMode === "single" ? "is-selected" : ""
              }`}
              onClick={() => setSiteMode("single")}
            >
              <div
                className="s4-choiceHeading"
                onClick={() => setuploadCsv(false)}
              >
                Single Location
              </div>
              <div className="s4-choiceSub">
                We operate from one facility only
              </div>
            </button>

            <button
              type="button"
              className={`s4-choiceCard ${
                siteMode === "multiple" ? "is-selected" : ""
              }`}
              onClick={() => setSiteMode("multiple")}
            >
              <div className="s4-choiceHeading">Multiple Locations</div>
              <div className="s4-choiceSub">
                We have multiple facilities or practice locations
              </div>
            </button>
          </div>

          {siteMode === "multiple" && (
            <>
              {/* SECTION 2 (title only) */}
              <div className="s4-methodSection">
                <h2 className="s4-title">
                  How would you like to add your site information?
                </h2>
              </div>

              {/* SECTION 3 (upload blue block with 2 inner sections) */}
              <div className="s4-uploadSection" onClick={handlecsvclick}>
                {/* Inner Section A: top bar */}
                <div className="s4-uploadTopBar">
                  <div className="s4-uploadHeading">Upload CSV / Excel</div>
                  <div className="s4-uploadSub">
                    Upload a spreadsheet with all site information
                  </div>
                </div>
              </div>
              {uploadCsv ? (
                <div className="s4-uploadSection">
                  <div className="s4-dropzoneWrap">
                    <div
                      className="s4-dropzone"
                      role="button"
                      tabIndex={0}
                      onClick={onPickFile}
                    >
                      <div className="s4-cloudIcon" aria-hidden="true">
                        ☁
                      </div>

                      <div className="s4-dropTitle">
                        Upload Site Information
                      </div>

                      <div className="s4-dropSub">
                        Drag and drop your CSV or Excel file here, or click to
                        select
                      </div>

                      <button
                        type="button"
                        className="s4-selectBtn"
                        onClick={onPickFile}
                      >
                        Select file
                      </button>

                      <button type="button" className="s4-linkBtn">
                        Download CSV Template
                      </button>

                      <input
                        ref={fileInputRef}
                        className="s4-hiddenInput"
                        type="file"
                        accept=".csv,.xlsx,.xls"
                        multiple
                        onChange={onFileChange}
                      />
                    </div>

                    {files.length > 0 && (
                      <>
                        <div className="s4-uploadedLabel">Uploaded</div>

                        <div className="s4-fileList">
                          {files.map((f) => (
                            <div
                              key={f.id}
                              className={`s4-fileCard ${
                                activeFileId === f.id ? "is-active" : ""
                              }`}
                              onClick={() => setActiveFileId(f.id)}
                            >
                              <div className="s4-fileLeft">
                                <div className="s4-fileIcon" aria-hidden="true">
                                  📄
                                </div>

                                <div className="s4-fileBody">
                                  <div className="s4-fileRow">
                                    <div className="s4-fileMeta">
                                      <div className="s4-fileName">
                                        {f.name}
                                      </div>
                                      <span
                                        className="s4-dot"
                                        aria-hidden="true"
                                      />
                                    </div>

                                    <div className="s4-fileSize">
                                      {prettySize(f.size)}
                                    </div>
                                  </div>

                                  <div className="s4-progressTrack">
                                    <div
                                      className="s4-progressFill"
                                      style={{ width: `${f.progress}%` }}
                                    />
                                  </div>
                                </div>
                              </div>

                              {activeFileId === f.id && (
                                <button
                                  type="button"
                                  className="s4-fileRemove"
                                  aria-label="Remove file"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    removeFile(f.id);
                                    setActiveFileId((cur) =>
                                      cur === f.id ? null : cur
                                    );
                                  }}
                                >
                                  ×
                                </button>
                              )}
                            </div>
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                </div>
              ) : (
                <></>
              )}
            </>
          )}
        </div>
        <StepNavigation />
      </div>
    </>
  );
}
