import LegalTemplate from "./LegalTemplate";

export default function TermsOfService() {
  const content = (
    <>
      <h2>1. Acceptance of Terms</h2>
      <p>By accessing the Potentiall Green portal, you agree to comply with all regional energy regulations and our internal safety protocols regarding site visits and engineering audits.</p>
      <h2>2. Intellectual Property</h2>
      <p>All architectural blueprints, proprietary BESS logic, and EPC project designs remain the exclusive property of Potentiall Facility Services Pvt. Ltd.</p>
    </>
  );
  return <LegalTemplate title="Terms of Service" lastUpdated="May 09, 2026" content={content} />;
}