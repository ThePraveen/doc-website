import SEO from '../components/SEO'
import PageTransition from '../components/PageTransition'
import { LegalSection } from '../components/LegalSection'
import { COMPANY } from '../constants'

export default function PrivacyPolicy() {
  return (
    <PageTransition>
      <SEO title="Privacy Policy" description="DOC Privacy Policy — GDPR-compliant, SOC2 Type II, ISO certified. How we collect, use, and protect your data." path="/privacy-policy" />

      <article className="max-w-3xl mx-auto px-6 pt-20 pb-16">
        <h1 className="text-[clamp(36px,5vw,56px)] font-bold tracking-[-0.035em] leading-[1.05]"><span className="grad">Privacy</span> <span className="grad-color">Policy</span></h1>
        <p className="mt-4 text-sm text-muted">Last updated: June 2026</p>

        <LegalSection title="1. Introduction">
          <p>DOC (Data Operations Company) ("we", "us", "our") respects your privacy. This Privacy Policy explains how we collect, use, store, and protect personal information when you use our website, our DOC App, or our data operations services. By engaging with DOC, you agree to the practices described here.</p>
        </LegalSection>

        <LegalSection title="2. Data We Collect">
          <p><strong>Client data:</strong> business contact details, project requirements, billing information, and the raw datasets you submit for processing.</p>
          <p><strong>Gig worker data:</strong> identity verification documents, contact details, payment information, location (for task allocation), device telemetry, and task output.</p>
          <p><strong>Visitor data:</strong> IP address, browser type, pages visited, referral source, and cookie identifiers.</p>
        </LegalSection>

        <LegalSection title="3. How We Use Data">
          <p>We use personal data to deliver our services, train and pay gig workers, fulfill contracts with clients, ensure quality and compliance, prevent fraud, communicate with you, and improve our products. We do not use client-submitted datasets for any purpose beyond the contracted engagement.</p>
        </LegalSection>

        <LegalSection title="4. Data Storage & Security">
          <p>All data is encrypted at rest (AES-256) and in transit (TLS 1.2+). We host on AWS in audited regions and follow least-privilege access controls, regular penetration testing, and continuous security monitoring as part of our SOC2 Type II program.</p>
        </LegalSection>

        <LegalSection title="5. GDPR Compliance">
          <p><strong>Lawful basis:</strong> we process personal data based on contract, legitimate interest, legal obligation, or consent — whichever applies.</p>
          <p><strong>Data subject rights:</strong> you may request access, rectification, erasure, restriction, portability, or objection to processing of your data.</p>
          <p><strong>EU transfers:</strong> where we transfer EU/EEA data outside the EU, we use Standard Contractual Clauses and supplementary safeguards.</p>
        </LegalSection>

        <LegalSection title="6. SOC2 Type II Controls">
          <p>Our operations are audited annually against the SOC2 Type II Trust Services Criteria (Security, Availability, Confidentiality, Processing Integrity, and Privacy). Reports are available to enterprise clients under NDA.</p>
        </LegalSection>

        <LegalSection title="7. ISO Standards">
          <p>DOC maintains an ISO-certified information security management system. Certificates are available on request.</p>
        </LegalSection>

        <LegalSection title="8. Data Retention">
          <p>We retain personal data only as long as necessary to fulfill contracts, meet legal obligations, and resolve disputes. Client datasets are deleted within 30 days of contract conclusion unless retention is required by law or by the client's written instruction.</p>
        </LegalSection>

        <LegalSection title="9. Third-Party Sharing">
          <p>We <strong>never sell</strong> personal data. We share data only with sub-processors strictly required to deliver our services (e.g., AWS, payment processors, identity verification), and only under written contracts that mirror our own data protection obligations.</p>
        </LegalSection>

        <LegalSection title="10. Cookies">
          <p>We use essential cookies for site functionality and analytics cookies (with consent) to improve our website. You may accept or reject non-essential cookies via the cookie banner.</p>
        </LegalSection>

        <LegalSection title="11. Children's Data">
          <p>DOC services are restricted to individuals 18 years and older. We do not knowingly collect data from anyone under 18.</p>
        </LegalSection>

        <LegalSection title="12. Contact">
          <p>For any privacy-related questions, exercise of GDPR rights, or complaints, contact us at <a className="text-primary underline underline-offset-2" href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>.</p>
        </LegalSection>

        <LegalSection title="13. Policy Updates">
          <p>We may update this Privacy Policy from time to time. Material changes will be communicated via our website or directly to clients. The "Last updated" date at the top reflects the most recent revision.</p>
        </LegalSection>
      </article>
    </PageTransition>
  )
}
