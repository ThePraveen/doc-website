import { motion } from 'framer-motion'
import SEO from '../components/SEO'
import PageTransition from '../components/PageTransition'

const stats = [
  { value: '2M+', label: 'Registered Gig Workers' },
  { value: '25K', label: 'Daily Active Workers' },
  { value: '3', label: 'Data Engines' },
  { value: '✓', label: 'GDPR · SOC2 II · ISO' },
]

export default function About() {
  return (
    <PageTransition>
      <SEO
        title="About Us"
        description="DOC is the human layer behind the world's AI. Founded by Praveen, ex-Awign, scaling 2M+ workers to power AI data pipelines."
        path="/about"
      />

      <section className="max-w-4xl mx-auto px-5 lg:px-8 pt-20 pb-12 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl lg:text-5xl font-bold tracking-tight"
        >
          We Believe the Future of AI is <span className="text-primary">Human</span>
        </motion.h1>
      </section>

      <section className="max-w-3xl mx-auto px-5 lg:px-8 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl bg-bg border border-sand p-8 md:p-12 shadow-sm"
        >
          <div className="text-sm font-semibold text-secondary uppercase tracking-wider">Founder Story</div>
          <p className="mt-4 text-lg text-ink/85 leading-relaxed">
            Hi, I'm Praveen. I started DOC after ending my journey with Awign — one of India's largest gig workforce platforms. At Awign, we scaled to 25,000 daily active workers from a pool of 2 million registered workforce. I saw firsthand the incredible capability of India's gig talent — disciplined, tech-savvy, and hungry to contribute to something bigger.
          </p>
          <p className="mt-4 text-lg text-ink/85 leading-relaxed">
            When I saw the AI industry's growing hunger for high-quality human-generated data, the connection was obvious. DOC is my answer to that gap.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-primary text-bg flex items-center justify-center font-bold">P</div>
            <div>
              <div className="font-bold">Praveen</div>
              <div className="text-sm text-ink/65">Founder & CEO</div>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="bg-sand/30 border-y border-sand">
        <div className="max-w-4xl mx-auto px-5 lg:px-8 py-16 text-center">
          <div className="text-sm font-semibold text-secondary uppercase tracking-wider">Our Mission</div>
          <h2 className="mt-3 text-2xl lg:text-3xl font-bold tracking-tight">
            To power the world's AI models with the most reliable, scalable, and ethically sourced human-generated data.
          </h2>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-5 lg:px-8 py-20">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="rounded-2xl bg-bg border border-sand p-7 text-center"
            >
              <div className="text-4xl font-bold text-primary">{s.value}</div>
              <div className="mt-2 text-sm text-ink/70">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </section>
    </PageTransition>
  )
}
