import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import {
  ArrowRight, Play, Database, ScanText, ShieldCheck,
  Users, Zap, Globe, Lock, Send, ShieldIcon, BadgeCheck, Award,
} from 'lucide-react'
import SEO from '../components/SEO'
import PageTransition from '../components/PageTransition'
import { GOOGLE_FORM_LINK } from '../constants'

const slides = [
  { src: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=2200&q=80', label: 'Generative AI · model training data' },
  { src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=2200&q=80', label: 'Annotation pipelines · human-in-the-loop' },
  { src: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=2200&q=80', label: 'Robotics & embodied AI · sensor capture' },
  { src: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2200&q=80', label: 'Mobile gig workforce · global scale' },
  { src: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=2200&q=80', label: 'Pipelines that flow · planet-scale data' },
]

function Carousel() {
  const [i, setI] = useState(0)
  useEffect(() => {
    if (document.hidden) return
    const t = setInterval(() => setI((x) => (x + 1) % slides.length), 5000)
    return () => clearInterval(t)
  }, [])
  return (
    <div className="relative w-full max-w-[1100px] mx-auto mt-14 p-2.5 rounded-[28px] glass">
      <div className="relative w-full aspect-[16/9] rounded-[20px] overflow-hidden bg-ink">
        {slides.map((s, idx) => (
          <div
            key={s.src}
            className="absolute inset-0 transition-opacity duration-[1400ms] ease-in-out"
            style={{ opacity: idx === i ? 1 : 0 }}
          >
            <img
              src={s.src}
              alt=""
              className="w-full h-full object-cover"
              loading={idx === 0 ? 'eager' : 'lazy'}
              onError={(e) => {
                const el = e.currentTarget
                el.style.display = 'none'
                const parent = el.parentElement
                if (parent) parent.style.background = 'linear-gradient(135deg, #FF7AB6 0%, #B47CFF 33%, #7DA4FF 66%, #6BE5C6 100%)'
              }}
            />
          </div>
        ))}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'linear-gradient(180deg, rgba(10,10,12,0) 50%, rgba(10,10,12,0.55) 100%)' }}
        />
        <div className="absolute left-7 right-7 bottom-5 flex items-center justify-between gap-4 text-white z-[2]">
          <span
            className="text-[13px] font-medium px-3.5 py-2 rounded-full"
            style={{
              background: 'rgba(255,255,255,0.18)',
              backdropFilter: 'blur(18px)',
              WebkitBackdropFilter: 'blur(18px)',
              border: '1px solid rgba(255,255,255,0.22)',
            }}
          >
            {slides[i].label}
          </span>
          <div className="flex gap-2">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setI(idx)}
                aria-label={`Slide ${idx + 1}`}
                className="transition-all duration-300 h-2 rounded-full"
                style={{
                  width: idx === i ? 24 : 8,
                  background: idx === i ? '#fff' : 'rgba(255,255,255,0.5)',
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function Counter({ to, format }: { to: number; format: 'k' | 'tb' | 'pct' | 'plus' }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [val, setVal] = useState(0)
  useEffect(() => {
    if (!inView) return
    const start = performance.now()
    const dur = 1600
    let raf = 0
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / dur)
      const eased = 1 - Math.pow(1 - p, 3)
      setVal(to * eased)
      if (p < 1) raf = requestAnimationFrame(tick)
      else setVal(to)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, to])
  const text =
    format === 'k'    ? `${(val / 1000).toFixed(val >= to ? 0 : 1)}K+`
    : format === 'tb' ? `${Math.round(val)}TB+`
    : format === 'pct'? `${val.toFixed(1)}%`
    : `${Math.round(val)}+`
  return <div ref={ref} className="text-[clamp(32px,4vw,48px)] font-bold tracking-[-0.03em] text-ink">{text}</div>
}

const whatWeDo = [
  {
    img: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1400&q=80',
    Icon: Database,
    title: 'Data Generation Machine',
    bullets: [
      'Human-generated and curated TBs of training data',
      'Text · Audio · Image · Video · Sensor',
      'Mobile · Meta Quest · Pico · Robotic Gloves',
    ],
    link: '/how-it-works#data-generation',
  },
  {
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=80',
    Icon: ScanText,
    title: 'Data Annotation Machine',
    bullets: [
      'The mandatory human step in your AI pipeline',
      'Throughput matched to every other stage',
      'Zero-bottleneck delivery guarantee',
    ],
    link: '/how-it-works#data-annotation',
  },
  {
    img: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1400&q=80',
    Icon: ShieldCheck,
    title: 'Quality Check Machine',
    bullets: [
      'Stops bad data before training touches it',
      'Saves costly retraining cycles',
      'Human + AI verification layer',
    ],
    link: '/how-it-works#quality-check',
  },
]

const pillars = [
  { Icon: Users, title: 'Scale',    body: '1000s of trained, vetted gig workers on-demand across India, Africa, and Mexico — ramped in days, not quarters.' },
  { Icon: Zap,   title: 'Speed',    body: 'Throughput matched to your pipeline SLA. Shifts engineered around your training cadence — not the other way around.' },
  { Icon: Globe, title: 'Coverage', body: 'Every modality, every device — text, audio, image, video, sensor data on phones, headsets, and robotic gloves.' },
  { Icon: Lock,  title: 'Trust',    body: 'Multi-layer QC built into every step. Encrypted at rest and in transit. GDPR, SOC2 Type II, ISO — by design.' },
]

export default function Home() {
  return (
    <PageTransition>
      <SEO
        title="The Human Layer Your AI Pipeline Needs"
        description="DOC deploys AI-powered technical gig workers to generate, annotate, and quality-check your training data — at the speed your pipeline demands."
        path="/"
      />

      {/* HERO */}
      <section className="px-6 pt-16 pb-20 lg:pt-20 lg:pb-28">
        <div className="max-w-[1240px] mx-auto text-center">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="chip"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" style={{ boxShadow: '0 0 12px #34C759' }} />
            AI-Powered Technical Gig Workers, At Scale
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mt-6 font-bold tracking-[-0.035em] leading-[1.05] text-[clamp(44px,7vw,92px)]"
          >
            <span className="grad">The Human Layer</span><br />
            <span className="grad-color">Your AI Pipeline Needs</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-6 text-[clamp(17px,1.4vw,20px)] text-muted max-w-[720px] mx-auto"
          >
            DOC deploys AI-powered technical gig workers to generate, annotate, and quality-check
            your training data — at the speed your pipeline demands.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-10 flex flex-wrap gap-3 justify-center"
          >
            <a href={GOOGLE_FORM_LINK} target="_blank" rel="noopener noreferrer" className="btn-dark">
              Talk to Us <ArrowRight size={17} />
            </a>
            <Link to="/how-it-works" className="btn-glass">
              See how it works <Play size={15} />
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
        >
          <Carousel />
        </motion.div>
      </section>

      {/* STATS */}
      <section className="px-6 pb-10">
        <div className="max-w-[1240px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="glass px-10 py-8 grid grid-cols-2 md:grid-cols-4"
          >
            {[
              { v: 10000, fmt: 'k' as const,    label: 'Trained Gig Workers' },
              { v: 500,   fmt: 'tb' as const,   label: 'Data Delivered' },
              { v: 99.9,  fmt: 'pct' as const,  label: 'Quality Pass Rate' },
              { v: 50,    fmt: 'plus' as const, label: 'Enterprise Clients' },
            ].map((s, i) => (
              <div key={s.label} className={`text-center px-2 py-3 relative ${i > 0 ? 'md:before:content-[\'\'] md:before:absolute md:before:left-0 md:before:top-[18%] md:before:bottom-[18%] md:before:w-px md:before:bg-black/10' : ''}`}>
                <Counter to={s.v} format={s.fmt} />
                <div className="mt-2 text-[13.5px] text-muted font-medium">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="px-6 py-24">
        <div className="max-w-[1240px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-[720px] mx-auto mb-16"
          >
            <div className="inline-flex items-center gap-2 text-[13px] font-semibold text-muted tracking-wide before:content-[''] before:w-6 before:h-px before:bg-black/10 after:content-[''] after:w-6 after:h-px after:bg-black/10">
              What We Do
            </div>
            <h2 className="mt-4 text-[clamp(36px,5vw,64px)] font-bold tracking-[-0.035em] leading-[1.05]">
              <span className="grad">Three engines.</span> <span className="grad-color">One pipeline.</span>
            </h2>
            <p className="mt-3 text-[18px] text-muted">Human-grade data at machine throughput — for every step of your AI lifecycle.</p>
          </motion.div>

          <div className="grid gap-5 md:grid-cols-3">
            {whatWeDo.map((c, i) => (
              <motion.article
                key={c.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -6 }}
                className="glass p-4 rounded-[26px] flex flex-col gap-4"
              >
                <div className="relative w-full aspect-[16/11] rounded-[18px] overflow-hidden bg-[#E5E5EA]">
                  <img
                    src={c.img}
                    alt=""
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    onError={(e) => {
                      const el = e.currentTarget
                      el.style.display = 'none'
                      const parent = el.parentElement
                      if (parent) parent.style.background = 'linear-gradient(135deg, #FF7AB6 0%, #B47CFF 33%, #7DA4FF 66%, #6BE5C6 100%)'
                    }}
                  />
                  <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(180deg, transparent 55%, rgba(0,0,0,0.25) 100%)' }} />
                  <div
                    className="absolute top-3.5 left-3.5 w-11 h-11 rounded-[14px] grid place-items-center"
                    style={{
                      background: 'rgba(255,255,255,0.85)',
                      backdropFilter: 'blur(18px) saturate(180%)',
                      WebkitBackdropFilter: 'blur(18px) saturate(180%)',
                      border: '1px solid rgba(255,255,255,0.95)',
                      boxShadow: 'inset 0 1px 0 rgba(255,255,255,1), 0 6px 14px -4px rgba(0,0,0,0.15)',
                    }}
                  >
                    <c.Icon size={20} className="text-ink" />
                  </div>
                </div>
                <div className="px-2 pb-3">
                  <h3 className="text-[22px] font-semibold mb-2.5">{c.title}</h3>
                  <ul className="space-y-2">
                    {c.bullets.map((b) => (
                      <li key={b} className="relative pl-[22px] text-[15px] text-muted-2 leading-snug">
                        <span className="absolute left-0 top-[9px] w-[10px] h-[2px] rounded-sm" style={{ background: 'linear-gradient(90deg, #B47CFF, #7DA4FF)' }} />
                        {b}
                      </li>
                    ))}
                  </ul>
                  <Link to={c.link} className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-ink hover:text-orb-purple">
                    Learn how it works →
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* WHY DOC */}
      <section className="px-6 py-24">
        <div className="max-w-[1240px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-[720px] mx-auto mb-16"
          >
            <div className="inline-flex items-center gap-2 text-[13px] font-semibold text-muted tracking-wide before:content-[''] before:w-6 before:h-px before:bg-black/10 after:content-[''] after:w-6 after:h-px after:bg-black/10">
              Why DOC
            </div>
            <h2 className="mt-4 text-[clamp(36px,5vw,64px)] font-bold tracking-[-0.035em] leading-[1.05]">
              <span className="grad">Built for the </span><span className="grad-color">AI scale curve</span>
            </h2>
            <p className="mt-3 text-[18px] text-muted">Four pillars that make us the default human layer for AI pipelines.</p>
          </motion.div>

          <div className="grid gap-5 md:grid-cols-2">
            {pillars.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -4 }}
                className="glass p-7 flex gap-5 items-start"
              >
                <div
                  className="shrink-0 w-14 h-14 rounded-[16px] grid place-items-center text-ink"
                  style={{
                    background: 'linear-gradient(135deg, rgba(180,124,255,0.18), rgba(125,164,255,0.18))',
                    border: '1px solid rgba(255,255,255,0.95)',
                    boxShadow: 'inset 0 1px 0 rgba(255,255,255,1), 0 6px 14px -4px rgba(180,124,255,0.25)',
                  }}
                >
                  <p.Icon size={24} />
                </div>
                <div>
                  <h3 className="text-[22px] font-semibold mb-2">{p.title}</h3>
                  <p className="text-[15.5px] text-muted">{p.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section className="px-6 pb-16 pt-4">
        <div className="max-w-[1240px] mx-auto flex flex-wrap gap-3 justify-center">
          <span className="chip"><ShieldIcon size={16} /> GDPR Compliant</span>
          <span className="chip"><BadgeCheck size={16} /> SOC2 Type II Certified</span>
          <span className="chip"><Award size={16} /> ISO Certified</span>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-10">
        <div className="max-w-[1240px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass glass-strong text-center px-8 py-14 md:px-10 md:py-16 rounded-[32px]"
          >
            <h2 className="text-[clamp(32px,4.4vw,52px)] font-bold tracking-[-0.035em] leading-[1.05]">
              <span className="grad">Ready to accelerate your</span> <span className="grad-color">AI data pipeline?</span>
            </h2>
            <p className="mt-3 text-[17px] text-muted max-w-[580px] mx-auto">
              More data, better models. Offer better models to your customers with our curated, quality data — in bulk.
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault()
                const email = (e.currentTarget.elements.namedItem('email') as HTMLInputElement).value
                window.open(`${GOOGLE_FORM_LINK}?email=${encodeURIComponent(email)}`, '_blank', 'noopener,noreferrer')
              }}
              className="mt-8 max-w-[560px] mx-auto flex gap-2 p-1.5 rounded-full"
              style={{
                background: 'rgba(255,255,255,0.7)',
                border: '1px solid rgba(0,0,0,0.06)',
                boxShadow: 'inset 0 1px 0 rgba(255,255,255,1), 0 8px 22px -8px rgba(31,38,60,0.18)',
              }}
            >
              <input
                type="email"
                name="email"
                required
                placeholder="Your work email"
                className="flex-1 bg-transparent outline-none px-5 py-3 text-[15px] text-ink placeholder:text-muted-2"
              />
              <button type="submit" className="btn-dark">
                Get in Touch <Send size={15} />
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  )
}
