import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import Logo from './Logo'
import { GOOGLE_FORM_LINK } from '../constants'

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/how-it-works', label: 'How It Works' },
  { to: '/about', label: 'About Us' },
  { to: '/careers', label: 'Careers' },
  { to: '/register-gig-worker', label: 'Register as Worker' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <div className="sticky top-4 z-40 px-5">
      <nav
        className="max-w-[1180px] mx-auto flex items-center justify-between gap-2 px-3 py-2 rounded-full"
        style={{
          background: 'rgba(255, 255, 255, 0.65)',
          backdropFilter: 'blur(28px) saturate(200%)',
          WebkitBackdropFilter: 'blur(28px) saturate(200%)',
          border: '1px solid rgba(255, 255, 255, 0.85)',
          boxShadow:
            'inset 0 1px 0 rgba(255,255,255,0.95), 0 1px 2px rgba(0,0,0,0.04), 0 12px 30px -12px rgba(31,38,60,0.16)',
        }}
        aria-label="Primary"
      >
        <div className="pl-2"><Logo /></div>

        <div className="hidden lg:flex items-center gap-1 px-2">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.end}
              className={({ isActive }) =>
                `text-[14px] font-medium px-3.5 py-2 rounded-full transition-colors ${
                  isActive ? 'bg-black/5 text-ink' : 'text-ink-2 hover:bg-black/5'
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            href={GOOGLE_FORM_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-dark hidden sm:inline-flex"
          >
            Talk to Us
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden grid place-items-center w-10 h-10 rounded-xl bg-black/5 text-ink"
            aria-label="Toggle menu"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {open ? <path d="M6 6l12 12M6 18L18 6" /> : <path d="M3 6h18M3 12h18M3 18h18" />}
            </svg>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="lg:hidden max-w-[1180px] mx-auto mt-2 p-3 rounded-3xl glass"
          >
            <div className="flex flex-col">
              {links.map((l) => (
                <NavLink
                  key={l.to}
                  to={l.to}
                  end={l.end}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `px-4 py-3 rounded-2xl text-[14.5px] font-medium ${
                      isActive ? 'bg-black/5 text-ink' : 'text-ink-2 hover:bg-black/5'
                    }`
                  }
                >
                  {l.label}
                </NavLink>
              ))}
              <a
                href={GOOGLE_FORM_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-dark mt-2 justify-center sm:hidden"
              >
                Talk to Us
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
