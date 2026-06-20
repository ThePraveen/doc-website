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
      className="rounded-2xl bg-bg border border-sand overflow-hidden"
    >
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 hover:bg-sand/30 transition-colors"
      >
        <div>
          <div className="font-bold text-lg">{job.title}</div>
          <div className="text-sm text-ink/65 mt-0.5">{job.location} · {job.comp}</div>
        </div>
        <motion.div animate={{ rotate: open ? 45 : 0 }} className="w-9 h-9 rounded-full bg-primary text-bg flex items-center justify-center shrink-0">
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
            className="overflow-hidden border-t border-sand"
          >
            <div className="px-6 py-5">
              <ul className="space-y-2 text-ink/80">
                {job.bullets.map((b) => (
                  <li key={b} className="flex gap-2"><span className="text-secondary mt-1">•</span><span>{b}</span></li>
                ))}
              </ul>
              <div className="mt-4 text-sm">
                <span className="font-semibold text-ink">Requirements:</span>{' '}
                <span className="text-ink/75">{job.reqs}</span>
              </div>
              <a
                href={CAREERS_FORM_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary hover:bg-secondary px-6 py-2.5 text-sm font-semibold text-bg"
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

      <section className="max-w-4xl mx-auto px-5 lg:px-8 pt-20 pb-12 text-center">
        <h1 className="text-4xl lg:text-5xl font-bold tracking-tight">Build the Infrastructure of AI</h1>
        <div className="mt-8 flex flex-wrap justify-center gap-2 text-sm">
          {['Above market salary', 'ESOP', 'Bangalore', 'WFH for seniors'].map((p) => (
            <span key={p} className="rounded-full bg-sand/60 border border-sand px-4 py-1.5 font-medium">{p}</span>
          ))}
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-5 lg:px-8 pb-20">
        <div className="space-y-4">
          {jobs.map((j, i) => <JobCard key={j.title} job={j} index={i} />)}
        </div>
      </section>
    </PageTransition>
  )
}
