import StepNavigation from "../../StepNavigation";
import "./Step3.css";

function ContactCard({ title }) {
  return (
    <section className="s3-contactCard">
      <h3 className="s3-cardTitle">{title}</h3>

      <label className="s3-checkboxRow">
        <input type="checkbox" />
        <span>Same as Primary Contact entered in Step 1</span>
      </label>

      <div className="s3-grid2">
        <div className="s3-fieldGroup">
          <div className="s3-labelRow">
            <span className="s3-label">First Name</span>
            <span className="s3-required">*</span>
          </div>
          <input className="s3-input" type="text" />
        </div>

        <div className="s3-fieldGroup">
          <div className="s3-labelRow">
            <span className="s3-label">Last Name</span>
            <span className="s3-required">*</span>
          </div>
          <input className="s3-input" type="text" />
        </div>
      </div>

      <div className="s3-fieldGroup">
        <div className="s3-labelRow">
          <span className="s3-label">Phone</span>
          <span className="s3-required">*</span>
        </div>
        <input className="s3-input" type="tel" />
      </div>

      <div className="s3-fieldGroup">
        <div className="s3-labelRow">
          <span className="s3-label">Email</span>
          <span className="s3-required">*</span>
        </div>
        <input className="s3-input" type="email" />
      </div>
    </section>
  );
}

function InvoicingAndBillingCard() {
  return (
    <section className="s3-contactCard">
      <h3 className="s3-cardTitle">Invoicing Contact</h3>

      <label className="s3-checkboxRow">
        <input type="checkbox" />
        <span>Same as Primary Contact entered in Step 1</span>
      </label>

      <div className="s3-grid2">
        <div className="s3-fieldGroup">
          <div className="s3-labelRow">
            <span className="s3-label">First Name</span>
            <span className="s3-required">*</span>
          </div>
          <input className="s3-input" type="text" />
        </div>

        <div className="s3-fieldGroup">
          <div className="s3-labelRow">
            <span className="s3-label">Last Name</span>
            <span className="s3-required">*</span>
          </div>
          <input className="s3-input" type="text" />
        </div>
      </div>

      <div className="s3-fieldGroup">
        <div className="s3-labelRow">
          <span className="s3-label">Phone</span>
          <span className="s3-required">*</span>
        </div>
        <input className="s3-input" type="tel" />
      </div>

      <div className="s3-fieldGroup">
        <div className="s3-labelRow">
          <span className="s3-label">Email</span>
          <span className="s3-required">*</span>
        </div>
        <input className="s3-input" type="email" />
      </div>

      <h3 className="s3-cardTitle">Billing Address</h3>

      <div className="s3-fieldGroup">
        <div className="s3-labelRow">
          <span className="s3-label">Street Address</span>
          <span className="s3-required">*</span>
        </div>
        <input className="s3-input" type="text" />
      </div>

      <div className="s3-grid3">
        <div className="s3-fieldGroup">
          <div className="s3-labelRow">
            <span className="s3-label">City</span>
            <span className="s3-required">*</span>
          </div>
          <input className="s3-input" type="text" />
        </div>

        <div className="s3-fieldGroup">
          <div className="s3-labelRow">
            <span className="s3-label">State</span>
            <span className="s3-required">*</span>
          </div>
          <select className="s3-input s3-select" defaultValue="">
            <option value="" disabled>
              Select State
            </option>
          </select>
        </div>

        <div className="s3-fieldGroup">
          <div className="s3-labelRow">
            <span className="s3-label">ZIP Code</span>
            <span className="s3-required">*</span>
          </div>
          <input className="s3-input" type="text" />
        </div>
      </div>
    </section>
  );
}

export default function Step3() {
  return (
    <>
      <div className="s3-page">
        <div className="s3-card">
          <div className="s3-section">
            <ContactCard title="Chief Executive Officer (CEO)" />
            <ContactCard title="Director of Quality" />
            <InvoicingAndBillingCard />
          </div>
        </div>
        <StepNavigation />
      </div>
    </>
  );
}
