import LegalTemplate from "./LegalTemplate";

export default function PrivacyPolicy() {
  const content = (
    <>
      <h2>1. Information Collection</h2>
      <p>Potentiall Green collects information to provide better services to all our users. This includes project-specific data for Solar EPC consultations and contact information provided via our website forms.</p>
      <h2>2. Use of Data</h2>
      <p>We use the data collected to optimize energy infrastructure designs and communicate project milestones. We do not sell your personal data to third parties.</p>
    </>
  );
  return <LegalTemplate title="Privacy Policy" lastUpdated="May 09, 2026" content={content} />;
}