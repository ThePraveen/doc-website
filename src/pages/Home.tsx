import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import SEO from '../components/SEO'
import PageTransition from '../components/PageTransition'
import { GOOGLE_FORM_LINK } from '../constants'

const whatWeDo = [
  {
    title: 'Data Generation Machine',
    points: [
      'Human-generated and curated TBs of data to train AI models',
      'Any format: Text, Audio, Image, Video, Sensor Data',
      'Any device: Mobile Camera, Meta Quest, Pico, Robotic Gloves',
    ],
    link: '/how-it-works#data-generation',
  },
  {
    title: 'Data Annotation Machine',
    points: [
      'The mandatory human annotation step in your AI pipeline',
      'Throughput matched to every other step in your pipeline',
      'Zero bottleneck guarantee',
    ],
    link: '/how-it-works#data-annotation',
  },
  {
    title: 'Quality Check Machine',
    points: [
      "Ensures your AI model doesn't train on wrong data",
      'Saves costly retraining cycles',
      'Human + AI verification layer',
    ],
    link: '/how-it-works#quality-check',
  },
]

const pillars = [
  { title: 'Scale', body: '1000s of trained gig workers on-demand' },
  { title: 'Speed', body: 'Matched to your pipeline SLA' },
  { title: 'Coverage', body: 'Every data modality and device type' },
  { title: 'Trust', body: 'QC built into every step' },
]

export default function Home() {
  return (
    <PageTransition>
      <SEO
        title="The Human Layer Your AI Pipeline Needs"
        description="DOC deploys AI-powered technical gig workers to generate, annotate, and quality-check your training data — at the speed your pipeline demands."
        path="/"
      />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 opacity-[0.07] pointer-events-none"
             style={{ backgroundImage: 'radial-gradient(circle, #8B5E3C 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
        <div className="max-w-7xl mx-auto px-5 lg:px-8 pt-20 pb-24 lg:pt-28 lg:pb-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center rounded-full bg-sand/60 border border-sand text-ink/70 px-4 py-1 text-xs font-medium"
          >
            AI-Powered Technical Gig Workers, At Scale
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight max-w-4xl mx-auto"
          >
            The Human Layer Your <span className="text-primary">AI Pipeline</span> Needs
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-lg lg:text-xl text-ink/75 max-w-2xl mx-auto leading-relaxed"
          >
            DOC deploys AI-powered technical gig workers to generate, annotate, and quality-check your training data — at the speed your pipeline demands.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10"
          >
            <a
              href={GOOGLE_FORM_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-primary hover:bg-secondary transition-colors px-7 py-3.5 text-base font-semibold text-bg shadow-lg shadow-primary/20"
            >
              Talk to Us
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
            </a>
          </motion.div>
        </div>
      </section>

      {/* What We Do */}
      <section className="max-w-7xl mx-auto px-5 lg:px-8 py-20">
        <div className="text-center mb-14">
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight">What We Do</h2>
          <p className="mt-3 text-ink/70 max-w-xl mx-auto">Three machines that power every step of your AI data pipeline.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {whatWeDo.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="rounded-2xl bg-bg border border-sand p-7 shadow-sm hover:shadow-md transition-shadow flex flex-col"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center font-bold">
                {i + 1}
              </div>
              <h3 className="mt-4 text-xl font-bold">{card.title}</h3>
              <ul className="mt-4 space-y-2 text-sm text-ink/75 flex-1">
                {card.points.map((p) => (
                  <li key={p} className="flex gap-2">
                    <span className="text-secondary mt-1">•</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
              <Link to={card.link} className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:text-secondary">
                Learn how it works →
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why DOC */}
      <section className="bg-sand/30 border-y border-sand">
        <div className="max-w-7xl mx-auto px-5 lg:px-8 py-20">
          <div className="text-center mb-14">
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight">Why DOC</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="rounded-xl bg-bg p-6 border border-sand"
              >
                <div className="text-gold font-bold text-sm uppercase tracking-wider">{p.title}</div>
                <p className="mt-2 text-ink font-medium">{p.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Strip */}
      <section className="max-w-7xl mx-auto px-5 lg:px-8 py-12 text-center">
        <p className="text-sm md:text-base text-ink/70">
          We are{' '}
          <span className="font-semibold text-ink">GDPR Compliant</span> ·{' '}
          <span className="font-semibold text-ink">SOC2 Type II Certified</span> ·{' '}
          <span className="font-semibold text-ink">ISO Certified</span>
        </p>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-5 lg:px-8 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl bg-gradient-to-br from-primary to-secondary text-bg p-10 md:p-14 text-center shadow-xl"
        >
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight">Ready to accelerate your AI data pipeline?</h2>
          <p className="mt-4 text-bg/85 max-w-2xl mx-auto">
            More data, better models. Offer better models to your customers with our curated, quality data in bulk.
          </p>
          <a
            href={GOOGLE_FORM_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-bg text-primary px-7 py-3.5 text-base font-semibold hover:bg-gold hover:text-ink transition-colors shadow-lg"
          >
            Tell Us Your Data Requirement
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
          </a>
        </motion.div>
      </section>
    </PageTransition>
  )
}
