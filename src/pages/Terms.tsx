import SEO from '../components/SEO'
import PageTransition from '../components/PageTransition'
import { LegalSection } from '../components/LegalSection'
import { COMPANY } from '../constants'

export default function Terms() {
  return (
    <PageTransition>
      <SEO title="Terms & Conditions" description="DOC Terms & Conditions — services, IP, payment, SLAs, liability, governing law, and dispute resolution." path="/terms" />

      <article className="max-w-3xl mx-auto px-5 lg:px-8 pt-20 pb-16">
        <h1 className="text-4xl lg:text-5xl font-bold tracking-tight">Terms & Conditions</h1>
        <p className="mt-4 text-sm text-ink/60">Last updated: June 2026</p>

        <LegalSection title="1. Acceptance">
          <p>By engaging DOC (Data Operations Company) for services, registering on the DOC App, or using our website, you agree to be bound by these Terms & Conditions. If you do not agree, do not use our services.</p>
        </LegalSection>

        <LegalSection title="2. Services Description">
          <p>DOC provides AI training data services: data generation, data annotation, and quality check, executed through a managed network of trained gig workers and supporting tooling.</p>
        </LegalSection>

        <LegalSection title="3. Client Obligations">
          <p>Clients agree to provide accurate requirements, lawful datasets, and any necessary licenses or consents for data submitted to DOC. Clients warrant that submitted data does not infringe third-party rights and complies with applicable laws.</p>
        </LegalSection>

        <LegalSection title="4. Gig Worker Terms">
          <p>Gig workers engage with DOC as independent contractors. Workers agree to confidentiality, quality standards, completion timelines, and the device and protocol guidelines provided per task. Compensation is task-based and disbursed per the schedule communicated in the DOC App.</p>
        </LegalSection>

        <LegalSection title="5. Intellectual Property">
          <p>Subject to full payment, all data, annotations, and deliverables produced under a client engagement are the exclusive property of the client. DOC retains ownership of its platform, tools, methodologies, and any pre-existing intellectual property.</p>
        </LegalSection>

        <LegalSection title="6. Confidentiality">
          <p>Each party shall treat the other's non-public information as confidential and use it only for the purpose of the engagement. Confidentiality obligations survive termination for five (5) years.</p>
        </LegalSection>

        <LegalSection title="7. Payment Terms">
          <p>Invoices are payable within 30 days of issue unless otherwise agreed in writing. Late payment may incur interest at 1.5% per month or the maximum allowed by law, whichever is lower, and may result in suspension of services.</p>
        </LegalSection>

        <LegalSection title="8. Service Levels">
          <p>Throughput, accuracy, and turnaround targets are specified in the applicable Statement of Work. DOC will use commercially reasonable efforts to meet committed service levels.</p>
        </LegalSection>

        <LegalSection title="9. Dispute Resolution">
          <p>Parties shall first attempt to resolve disputes through good-faith discussion. Where escalation is required, <strong>DOC's decision is final</strong> on operational matters. Legal disputes shall be subject to the exclusive jurisdiction of the courts of <strong>Bangalore, India</strong>.</p>
        </LegalSection>

        <LegalSection title="10. Limitation of Liability">
          <p>To the maximum extent permitted by law, DOC's total aggregate liability under any engagement is <strong>capped at the fees paid by the client in the three (3) months preceding the event giving rise to the claim</strong>. DOC is not liable for indirect, incidental, special, or consequential damages.</p>
        </LegalSection>

        <LegalSection title="11. GDPR Compliance">
          <p>Where DOC processes personal data on behalf of a client, a Data Processing Agreement (DPA) reflecting GDPR Article 28 obligations forms part of these Terms. See our Privacy Policy for additional details.</p>
        </LegalSection>

        <LegalSection title="12. Termination">
          <p>Either party may terminate an engagement with <strong>thirty (30) days' written notice</strong>. Either party may terminate immediately for material breach not cured within 15 days of written notice. Fees accrued through the effective date of termination remain payable.</p>
        </LegalSection>

        <LegalSection title="13. Governing Law">
          <p>These Terms are governed by the laws of <strong>India</strong>, with the courts of <strong>Karnataka</strong> having exclusive jurisdiction, except where mandatory local law requires otherwise.</p>
        </LegalSection>

        <LegalSection title="14. Contact">
          <p>For any questions regarding these Terms, contact <a className="text-primary underline underline-offset-2" href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>.</p>
        </LegalSection>
      </article>
    </PageTransition>
  )
}
