import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SEO from '../components/SEO'
import PageTransition from '../components/PageTransition'
import { CAREERS_FORM_LINK } from '../constants'

type Job = {
  title: string
  location: string
  comp: string
  bullets: string[]
  reqs: string
}

const jobs: Job[] = [
  {
    title: 'Senior Full Stack Engineer',
    location: 'Bangalore · WFH eligible',
    comp: 'Above market + ESOP',
    bullets: [
      'Build and scale DOC platform (gig-powered data pipelines)',
      'REST/GraphQL APIs, React dashboards, AWS infra',
    ],
    reqs: '4+ years full-stack (Node.js or Python + React), PostgreSQL, AWS',
  },
  {
    title: 'Senior UI/UX Designer',
    location: 'Bangalore · WFH eligible',
    comp: 'Above market + ESOP',
    bullets: [
      'Design for enterprise clients and gig workers on mobile',
      'Own Figma design system, run user research',
    ],
    reqs: '4+ years UI/UX, mobile-first experience',
  },
  {
    title: 'iOS Developer',
    location: 'Bangalore',
    comp: 'Above market + ESOP',
    bullets: [
      'Build DOC App — task capture, camera, audio, sensor data',
      'Offline-first, optimized for low-end devices',
    ],
    reqs: '3+ years Swift/SwiftUI, AVFoundation',
  },
  {
    title: 'Flutter Developer',
    location: 'Bangalore',
    comp: 'Above market + ESOP',
    bullets: [
      'Cross-platform DOC App for India/Africa gig workforce',
      'Offline-first, text/image/audio/video task flows',
    ],
    reqs: '3+ years Flutter/Dart',
  },
  {
    title: 'Senior Technical Architect',
    location: 'Bangalore · WFH eligible',
    comp: 'Above market + ESOP',
    bullets: [
      'Own technical vision: TB-scale pipelines, 1000s concurrent workers, enterprise SLAs',
      'GDPR/SOC2/ISO compliance by design',
    ],
    reqs: '8+ years engineering, 3+ architecture, distributed systems, AWS',
  },
]

function JobCard({ job, index }: { job: Job; index: number }) {
  const [open, setOpen] = useState(false)
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="glass overflow-hidden"
    >
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 hover:bg-white/30 transition-colors"
      >
        <div>
          <div className="font-semibold text-[17px] text-ink">{job.title}</div>
          <div className="text-[13.5px] text-muted mt-0.5">{job.location} · {job.comp}</div>
        </div>
        <motion.div
          animate={{ rotate: open ? 45 : 0 }}
          className="w-9 h-9 rounded-full grid place-items-center shrink-0 text-white"
          style={{
            background: 'linear-gradient(135deg, #0A0A0C, #2A2A2D)',
            boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.25), 0 6px 14px -4px rgba(0,0,0,0.3)',
          }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 5v14M5 12h14"/></svg>
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-black/5"
          >
            <div className="px-6 py-5">
              <ul className="space-y-2 text-ink-2">
                {job.bullets.map((b) => (
                  <li key={b} className="flex gap-2 text-[15px]">
                    <span className="mt-[10px] inline-block w-2.5 h-0.5 rounded-sm" style={{ background: 'linear-gradient(90deg, #B47CFF, #7DA4FF)' }} />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-4 text-[14px]">
                <span className="font-semibold text-ink">Requirements:</span>{' '}
                <span className="text-muted">{job.reqs}</span>
              </div>
              <a
                href={CAREERS_FORM_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-dark mt-6"
              >
                Apply Now
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function Careers() {
  return (
    <PageTransition>
      <SEO
        title="Careers"
        description="Build the infrastructure of AI. Engineering, design, and architecture roles at DOC. Above market + ESOP, Bangalore + WFH."
        path="/careers"
      />

      <section className="max-w-4xl mx-auto px-6 pt-20 pb-10 text-center">
        <h1 className="text-[clamp(40px,6vw,72px)] font-bold tracking-[-0.035em] leading-[1.05]">
          <span className="grad">Build the infrastructure</span><br />
          <span className="grad-color">of AI</span>
        </h1>
        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {['Above market salary', 'ESOP', 'Bangalore', 'WFH for seniors'].map((p) => (
            <span key={p} className="chip">{p}</span>
          ))}
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 pb-20">
        <div className="space-y-4">
          {jobs.map((j, i) => <JobCard key={j.title} job={j} index={i} />)}
        </div>
      </section>
    </PageTransition>
  )
}
