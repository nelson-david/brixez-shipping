import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function PrivacyPage() {
  return (
    <main>
      <Navbar />

      <section className="form-page">
        <p className="eyebrow">Data Governance</p>
        <h1>
          Privacy and
          <br />
          trade data <em>protection.</em>
        </h1>
        <p>
          Brixez Logistics Ltd is committed to protecting commercial, flight, and consignment records in full compliance with the UK GDPR and the Data Protection Act 2018.
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: "28px", paddingTop: "24px", borderTop: "1px solid var(--line)" }}>
          <div>
            <h3 style={{ fontSize: "17px", fontWeight: "500", marginBottom: "8px", color: "var(--ink)" }}>1. Data Collected</h3>
            <p style={{ color: "var(--muted)", lineHeight: "1.6", margin: 0, fontSize: "14px" }}>
              We process shipment consignor and consignee names, commercial invoices, commodity codes, and airway bill manifests strictly for customs clearance, flight security screening, and physical delivery.
            </p>
          </div>

          <div>
            <h3 style={{ fontSize: "17px", fontWeight: "500", marginBottom: "8px", color: "var(--ink)" }}>2. Confidentiality</h3>
            <p style={{ color: "var(--muted)", lineHeight: "1.6", margin: 0, fontSize: "14px" }}>
              Consignment telemetry and trade documentation are retained securely and never shared with third parties beyond mandatory civil aviation and HMRC statutory authorities.
            </p>
          </div>

          <div>
            <h3 style={{ fontSize: "17px", fontWeight: "500", marginBottom: "8px", color: "var(--ink)" }}>3. Contacting the DPO</h3>
            <p style={{ color: "var(--muted)", lineHeight: "1.6", margin: 0, fontSize: "14px" }}>
              For data access requests, contact dispatch@brixez.com or write to Brixez Logistics Ltd, 45a Great North Way, London, England, NW4 1PT.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
