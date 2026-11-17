import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function TermsPage() {
  return (
    <main>
      <Navbar />

      <section className="form-page">
        <p className="eyebrow">Standard Trading Conditions</p>
        <h1>
          Conditions of
          <br />
          commercial <em>carriage.</em>
        </h1>
        <p>
          Effective Date: January 1, 2026 • Brixez Logistics Ltd (45a Great North Way, London, England, NW4 1PT).
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: "28px", paddingTop: "24px", borderTop: "1px solid var(--line)" }}>
          <div>
            <h3 style={{ fontSize: "17px", fontWeight: "500", marginBottom: "8px", color: "var(--ink)" }}>1. Application of Conditions</h3>
            <p style={{ color: "var(--muted)", lineHeight: "1.6", margin: 0, fontSize: "14px" }}>
              All business conducted by Brixez Logistics Ltd is undertaken subject to the standard trading conditions of the British International Freight Association (BIFA) and international conventions governing air (Warsaw / Montreal) and sea (Hague-Visby) transport.
            </p>
          </div>

          <div>
            <h3 style={{ fontSize: "17px", fontWeight: "500", marginBottom: "8px", color: "var(--ink)" }}>2. Bonded Storage Terms</h3>
            <p style={{ color: "var(--muted)", lineHeight: "1.6", margin: 0, fontSize: "14px" }}>
              Goods deposited into our HMRC Type U Customs Warehouse at 45a Great North Way remain under customs supervision. Duties and import VAT remain deferred until formal clearance is executed.
            </p>
          </div>

          <div>
            <h3 style={{ fontSize: "17px", fontWeight: "500", marginBottom: "8px", color: "var(--ink)" }}>3. Direct Inquiries</h3>
            <p style={{ color: "var(--muted)", lineHeight: "1.6", margin: 0, fontSize: "14px" }}>
              Direct all questions regarding cargo insurance, liability limits, and customs declarations to dispatch@brixez.com or telephone +44 785 357 3182.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
