import StepNavigation from "../../StepNavigation";
import "./Step3.css";
import { useFormData } from "../../FormContext";
import { useEffect, useState } from "react";

function ContactCard({ title, storageKey }) {
  const { formData } = useFormData();
  const primary = formData.step1 || {};

  const [sameAsPrimary, setSameAsPrimary] = useState(false);

  const [contact, setContact] = useState({
    firstName: "",
    lastName: "",
    cellPhone: "",
    email: "",
  });

  useEffect(() => {
    if (sameAsPrimary) {
      setContact({
        firstName: primary.firstName || "",
        lastName: primary.lastName || "",
        cellPhone: primary.cellPhone || "",
        email: primary.email || "",
      });
    }
  }, [sameAsPrimary, primary]);

  return (
    <section className="s3-contactCard">
      <h3 className="s3-cardTitle">{title}</h3>

      <label className="s3-checkboxRow">
        <input
          type="checkbox"
          checked={sameAsPrimary}
          onChange={(e) => setSameAsPrimary(e.target.checked)}
        />
        <span>Same as Primary Contact entered in Step 1</span>
      </label>

      <div className="s3-grid2">
        <div className="s3-fieldGroup">
          <div className="s3-labelRow">
            <span className="s3-label">First Name</span>
            <span className="s3-required">*</span>
          </div>
          <input
            className={`s3-input ${sameAsPrimary ? "disabled" : ""}`}
            value={contact.firstName}
            disabled={sameAsPrimary}
            onChange={(e) =>
              setContact({ ...contact, firstName: e.target.value })
            }
          />
        </div>

        <div className="s3-fieldGroup">
          <div className="s3-labelRow">
            <span className="s3-label">Last Name</span>
            <span className="s3-required">*</span>
          </div>
          <input
            className={`s3-input ${sameAsPrimary ? "disabled" : ""}`}
            value={contact.lastName}
            disabled={sameAsPrimary}
            onChange={(e) =>
              setContact({ ...contact, lastName: e.target.value })
            }
          />
        </div>
      </div>

      <div className="s3-fieldGroup">
        <div className="s3-labelRow">
          <span className="s3-label">Phone</span>
          <span className="s3-required">*</span>
        </div>
        <input
          className={`s3-input ${sameAsPrimary ? "disabled" : ""}`}
          value={contact.cellPhone}
          disabled={sameAsPrimary}
          onChange={(e) =>
            setContact({ ...contact, cellPhone: e.target.value })
          }
        />
      </div>

      <div className="s3-fieldGroup">
        <div className="s3-labelRow">
          <span className="s3-label">Email</span>
          <span className="s3-required">*</span>
        </div>
        <input
          className={`s3-input ${sameAsPrimary ? "disabled" : ""}`}
          value={contact.email}
          disabled={sameAsPrimary}
          onChange={(e) => setContact({ ...contact, email: e.target.value })}
        />
      </div>
      <input
        type="hidden"
        value={JSON.stringify(contact)}
        data-key={storageKey}
      />
    </section>
  );
}

function InvoicingAndBillingCard() {
  const { formData } = useFormData();
  const primary = formData.step1 || {};

  const [sameAsPrimary, setSameAsPrimary] = useState(false);

  const [invoiceContact, setInvoiceContact] = useState({
    firstName: "",
    lastName: "",
    cellPhone: "",
    email: "",
  });

  const [billingAddress, setBillingAddress] = useState({
    street: "",
    city: "",
    state: "",
    zip: "",
  });

  useEffect(() => {
    if (sameAsPrimary) {
      setInvoiceContact({
        firstName: primary.firstName || "",
        lastName: primary.lastName || "",
        cellPhone: primary.cellPhone || "",
        email: primary.email || "",
      });
    }
  }, [sameAsPrimary, primary]);
  return (
    <section className="s3-contactCard">
      <h3 className="s3-cardTitle">Invoicing Contact</h3>

      <label className="s3-checkboxRow">
        <input
          type="checkbox"
          checked={sameAsPrimary}
          onChange={(e) => setSameAsPrimary(e.target.checked)}
        />
        <span>Same as Primary Contact entered in Step 1</span>
      </label>

      <div className="s3-grid2">
        <div className="s3-fieldGroup">
          <div className="s3-labelRow">
            <span className="s3-label">First Name</span>
            <span className="s3-required">*</span>
          </div>
          <input
            className={`s3-input ${sameAsPrimary ? "disabled" : ""}`}
            value={invoiceContact.firstName}
            disabled={sameAsPrimary}
            onChange={(e) =>
              setInvoiceContact({
                ...invoiceContact,
                firstName: e.target.value,
              })
            }
          />
        </div>

        <div className="s3-fieldGroup">
          <div className="s3-labelRow">
            <span className="s3-label">Last Name</span>
            <span className="s3-required">*</span>
          </div>
          <input
            className={`s3-input ${sameAsPrimary ? "disabled" : ""}`}
            value={invoiceContact.lastName}
            disabled={sameAsPrimary}
            onChange={(e) =>
              setInvoiceContact({ ...invoiceContact, lastName: e.target.value })
            }
          />
        </div>
      </div>

      <div className="s3-fieldGroup">
        <div className="s3-labelRow">
          <span className="s3-label">Phone</span>
          <span className="s3-required">*</span>
        </div>
        <input
          className={`s3-input ${sameAsPrimary ? "disabled" : ""}`}
          value={invoiceContact.cellPhone}
          disabled={sameAsPrimary}
          onChange={(e) =>
            setInvoiceContact({ ...invoiceContact, cellPhone: e.target.value })
          }
        />
      </div>

      <div className="s3-fieldGroup">
        <div className="s3-labelRow">
          <span className="s3-label">Email</span>
          <span className="s3-required">*</span>
        </div>
        <input
          className={`s3-input ${sameAsPrimary ? "disabled" : ""}`}
          value={invoiceContact.email}
          disabled={sameAsPrimary}
          onChange={(e) =>
            setInvoiceContact({ ...invoiceContact, email: e.target.value })
          }
        />
      </div>

      <h3 className="s3-cardTitle">Billing Address</h3>

      <div className="s3-fieldGroup">
        <div className="s3-labelRow">
          <span className="s3-label">Street Address</span>
          <span className="s3-required">*</span>
        </div>
        <input
          className="s3-input"
          value={billingAddress.street}
          onChange={(e) =>
            setBillingAddress({ ...billingAddress, street: e.target.value })
          }
        />
      </div>

      <div className="s3-grid3">
        <div className="s3-fieldGroup">
          <div className="s3-labelRow">
            <span className="s3-label">City</span>
            <span className="s3-required">*</span>
          </div>
          <input
            className="s3-input"
            value={billingAddress.city}
            onChange={(e) =>
              setBillingAddress({ ...billingAddress, city: e.target.value })
            }
          />
        </div>

        <div className="s3-fieldGroup">
          <div className="s3-labelRow">
            <span className="s3-label">State</span>
            <span className="s3-required">*</span>
          </div>
          <select
            className="s3-input s3-select"
            defaultValue=""
            value={billingAddress.state}
            onChange={(e) =>
              setBillingAddress({ ...billingAddress, state: e.target.value })
            }
          >
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
          <input
            className="s3-input"
            value={billingAddress.zip}
            onChange={(e) =>
              setBillingAddress({ ...billingAddress, zip: e.target.value })
            }
          />
        </div>
      </div>
      <input
        type="hidden"
        data-key="invoicingContact"
        value={JSON.stringify(invoiceContact)}
      />
      <input
        type="hidden"
        data-key="billingAddress"
        value={JSON.stringify(billingAddress)}
      />
    </section>
  );
}

export default function Step3() {
  return (
    <>
      <div className="s3-page">
        <div className="s3-card">
          <div className="s3-section">
            <ContactCard
              title="Chief Executive Officer (CEO)"
              storageKey="ceoContact"
            />
            <ContactCard
              title="Director of Quality"
              storageKey="qualityDirectorContact"
            />
            <InvoicingAndBillingCard />
          </div>
        </div>
        <StepNavigation stepKey="step3" collectFromDom />
      </div>
    </>
  );
}
