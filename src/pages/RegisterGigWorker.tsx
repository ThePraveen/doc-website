import { motion } from 'framer-motion'
import SEO from '../components/SEO'
import PageTransition from '../components/PageTransition'
import { GIG_WORKER_REGISTRATION_LINK } from '../constants'

export default function RegisterGigWorker() {
  return (
    <PageTransition>
      <SEO
        title="Register as Gig Worker"
        description="Join the DOC Gig Network. Earn by contributing to the world's AI models. Currently available in India."
        path="/register-gig-worker"
      />

      <section className="max-w-3xl mx-auto px-6 pt-24 pb-24 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-[clamp(40px,6vw,72px)] font-bold tracking-[-0.035em] leading-[1.05]"
        >
          <span className="grad">Join the</span><br />
          <span className="grad-color">DOC Gig Network</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-5 text-[18px] text-muted"
        >
          Earn by contributing to the world's AI models.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10 glass p-8 md:p-12"
        >
          <p className="text-[16px] text-ink-2 leading-relaxed">
            Registration is on our dedicated <span className="font-semibold">DOC App</span> platform.
          </p>
          <a
            href={GIG_WORKER_REGISTRATION_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-dark mt-8 px-8 py-4 text-[15px]"
          >
            Register Now
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
          </a>
          <p className="mt-8 text-[13.5px] text-muted">
            Currently available for workers in India. Global expansion coming soon.
          </p>
        </motion.div>
      </section>
    </PageTransition>
  )
}
