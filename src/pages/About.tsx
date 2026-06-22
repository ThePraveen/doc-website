import { motion } from 'framer-motion'
import SEO from '../components/SEO'
import PageTransition from '../components/PageTransition'

const stats = [
  { value: '2M+', label: 'Registered Gig Workers' },
  { value: '25K', label: 'Daily Active Workers' },
  { value: '3',   label: 'Data Engines' },
  { value: '✓',   label: 'GDPR · SOC2 II · ISO' },
]

export default function About() {
  return (
    <PageTransition>
      <SEO
        title="About Us"
        description="DOC is the human layer behind the world's AI. Founded by Praveen, ex-Awign, scaling 2M+ workers to power AI data pipelines."
        path="/about"
      />

      <section className="max-w-4xl mx-auto px-6 pt-20 pb-10 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-[clamp(40px,6vw,72px)] font-bold tracking-[-0.035em] leading-[1.05]"
        >
          <span className="grad">We believe the future</span><br />
          <span className="grad-color">of AI is human</span>
        </motion.h1>
      </section>

      <section className="max-w-3xl mx-auto px-6 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass p-8 md:p-12"
        >
          <div className="text-[12px] font-semibold tracking-[0.08em] uppercase text-muted">Founder Story</div>
          <p className="mt-4 text-[17px] text-ink-2 leading-relaxed">
            Hi, I'm Praveen. I started DOC after ending my journey with Awign — one of India's largest gig workforce platforms. At Awign, we scaled to 25,000 daily active workers from a pool of 2 million registered workforce. I saw firsthand the incredible capability of India's gig talent — disciplined, tech-savvy, and hungry to contribute to something bigger.
          </p>
          <p className="mt-4 text-[17px] text-ink-2 leading-relaxed">
            When I saw the AI industry's growing hunger for high-quality human-generated data, the connection was obvious. DOC is my answer to that gap.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <div
              className="w-12 h-12 rounded-full grid place-items-center text-white font-bold"
              style={{
                background: 'linear-gradient(135deg, #1D1D1F 0%, #3A3A3C 100%)',
                boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.25), 0 6px 14px -4px rgba(0,0,0,0.25)',
              }}
            >
              P
            </div>
            <div>
              <div className="font-bold">Praveen</div>
              <div className="text-sm text-muted">Founder & CEO</div>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="px-6 py-16">
        <div className="max-w-3xl mx-auto text-center glass p-10 md:p-14">
          <div className="text-[12px] font-semibold tracking-[0.08em] uppercase text-muted">Our Mission</div>
          <h2 className="mt-3 text-[clamp(24px,3.2vw,38px)] font-bold tracking-[-0.025em] leading-snug">
            <span className="grad">To power the world's AI models with the most reliable, scalable, and</span> <span className="grad-color">ethically sourced human-generated data.</span>
          </h2>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="glass p-7 text-center"
            >
              <div className="text-4xl font-bold text-ink">{s.value}</div>
              <div className="mt-2 text-sm text-muted">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </section>
    </PageTransition>
  )
}
