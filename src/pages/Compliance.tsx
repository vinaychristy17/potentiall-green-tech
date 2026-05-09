import LegalTemplate from "./LegalTemplate";

export default function Compliance() {
  const content = (
    <>
      <h2>1. Regulatory Framework</h2>
      <p>Potentiall operates in strict accordance with the Ministry of New and Renewable Energy (MNRE) guidelines and local DISCOM regulations for grid connectivity.</p>
      <h2>2. ESG Commitments</h2>
      <p>Our operations are audited annually for Environmental, Social, and Governance compliance, ensuring our supply chain remains carbon-neutral.</p>
    </>
  );
  return <LegalTemplate title="Compliance" lastUpdated="May 09, 2026" content={content} />;
}