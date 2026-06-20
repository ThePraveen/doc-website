import { motion } from 'framer-motion'
import SEO from '../components/SEO'
import PageTransition from '../components/PageTransition'
import { GOOGLE_FORM_LINK } from '../constants'

type Step = { title: string; body: string }
type Section = { id: string; title: string; lead: string; steps: Step[] }

const sections: Section[] = [
  {
    id: 'data-generation',
    title: 'Data Generation Machine',
    lead: 'TBs of human-generated data, in any modality, on any device — ready to feed your model.',
    steps: [
      { title: 'Client Submits Requirement', body: 'You tell us: data type, volume, format, device preference, and deadline.' },
      { title: 'DOC Designs the Collection Task', body: 'We break your requirement into micro-tasks. We select the right device (Mobile, Meta Quest, Pico, Robotic Gloves) and collection protocol.' },
      { title: 'Gig Workers Fuel the Engine', body: 'Trained gig workers across India, Africa, and Mexico execute tasks in parallel.' },
      { title: 'Data Flows Into Your Pipeline', body: 'Data packaged in your format, delivered at the throughput your pipeline expects.' },
      { title: 'You Receive Pipeline-Ready Data', body: 'TBs of human-generated, real-world data — ready to feed your model.' },
    ],
  },
  {
    id: 'data-annotation',
    title: 'Data Annotation Machine',
    lead: 'Schema-compliant, multi-layer reviewed annotations at the throughput your pipeline demands.',
    steps: [
      { title: 'Client Shares Raw Dataset', body: 'You provide raw data with your annotation schema and labeling guidelines.' },
      { title: 'DOC Sets Up Annotation Workflow', body: 'We configure labeling tools, quality thresholds, worker training, and throughput targets.' },
      { title: 'Gig Workers Annotate at Scale', body: 'Annotators work in shifts matched to your pipeline throughput.' },
      { title: 'Multi-Layer Review', body: 'Every annotation passes peer review and supervisor audit.' },
      { title: 'Annotated Data Delivered', body: 'Clean, schema-compliant annotations in your required format.' },
    ],
  },
  {
    id: 'quality-check',
    title: 'Quality Check Machine',
    lead: 'Stop bad data before it touches your training run. Save retraining cycles. Ship better models.',
    steps: [
      { title: 'Client Flags QC Requirement', body: 'You tell us: acceptable error rate, critical failure categories.' },
      { title: 'DOC Designs QC Protocol', body: "Custom QC checklist aligned with your model's sensitivity." },
      { title: 'Human + AI Verification', body: 'Automated checks first, then human review for ambiguous samples.' },
      { title: 'Error Report & Remediation', body: 'We flag bad data, fix or replace it before it touches your training run.' },
      { title: 'Clean Data, Confident Models', body: 'Fewer retraining cycles. Lower cost. Better outcomes.' },
    ],
  },
]

export default function HowItWorks() {
  return (
    <PageTransition>
      <SEO
        title="How It Works"
        description="Three machines power every step of your AI data pipeline: generation, annotation, and quality check — all human-led, AI-augmented."
        path="/how-it-works"
      />

      <section className="max-w-7xl mx-auto px-5 lg:px-8 pt-20 pb-12 text-center">
        <h1 className="text-4xl lg:text-5xl font-bold tracking-tight">How It Works</h1>
        <p className="mt-5 text-lg text-ink/75 max-w-2xl mx-auto">
          Three engines. One promise: human-grade data, at machine throughput.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-2 text-sm">
          {sections.map((s) => (
            <a key={s.id} href={`#${s.id}`} className="rounded-full border border-sand bg-bg px-4 py-1.5 hover:border-primary hover:text-primary transition-colors">
              {s.title}
            </a>
          ))}
        </div>
      </section>

      {sections.map((section, sIdx) => (
        <section
          key={section.id}
          id={section.id}
          className={`scroll-mt-24 ${sIdx % 2 === 1 ? 'bg-sand/30 border-y border-sand' : ''}`}
        >
          <div className="max-w-5xl mx-auto px-5 lg:px-8 py-20">
            <div className="mb-12">
              <div className="text-sm font-semibold text-secondary uppercase tracking-wider">
                Engine {sIdx + 1}
              </div>
              <h2 className="mt-2 text-3xl lg:text-4xl font-bold tracking-tight">{section.title}</h2>
              <p className="mt-3 text-ink/75 max-w-2xl">{section.lead}</p>
            </div>

            <ol className="relative">
              <span className="absolute left-5 top-2 bottom-2 w-px bg-sand" aria-hidden />
              {section.steps.map((step, i) => (
                <motion.li
                  key={step.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="relative pl-16 pb-10 last:pb-0"
                >
                  <span className="absolute left-0 top-0 w-10 h-10 rounded-full bg-primary text-bg flex items-center justify-center font-bold text-sm shadow">
                    {i + 1}
                  </span>
                  <h3 className="font-bold text-lg">Step {i + 1} — {step.title}</h3>
                  <p className="mt-2 text-ink/75 leading-relaxed">{step.body}</p>
                </motion.li>
              ))}
            </ol>
          </div>
        </section>
      ))}

      <section className="max-w-7xl mx-auto px-5 lg:px-8 py-20 text-center">
        <h2 className="text-3xl font-bold">Ready to plug DOC into your pipeline?</h2>
        <a
          href={GOOGLE_FORM_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary hover:bg-secondary px-7 py-3.5 text-base font-semibold text-bg shadow-lg"
        >
          Talk to Us
        </a>
      </section>
    </PageTransition>
  )
}
