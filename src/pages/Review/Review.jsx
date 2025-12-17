import { useLocation, useNavigate } from "react-router-dom";

export default function Review() {
  const nav = useNavigate();
  const { state } = useLocation();

  const payload = {
    step1: state?.step1 ?? {},
    step2: state?.step2 ?? {},
    step3: state?.step3 ?? {},
  };

  const onBack = () => nav("/step-3", { state });
  const onSubmit = () => {
    console.log("FORM_PAYLOAD:", payload);
  };

  return (
    <div className="page">
      <div className="card">
        <h1 className="title">Review</h1>

        <pre className="pre">{JSON.stringify(payload, null, 2)}</pre>

        <div className="actions">
          <button className="btn btnGhost" onClick={onBack}>
            Back
          </button>
          <button className="btn btnPrimary" onClick={onSubmit}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
