import { Link } from 'react-router-dom'
import { COMPANY } from '../constants'

const links = [
  { to: '/', label: 'Home' },
  { to: '/how-it-works', label: 'How It Works' },
  { to: '/about', label: 'About' },
  { to: '/careers', label: 'Careers' },
  { to: '/register-gig-worker', label: 'Register as Gig Worker' },
  { to: '/privacy-policy', label: 'Privacy Policy' },
  { to: '/terms', label: 'Terms' },
]

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-sand bg-sand/30">
      <div className="max-w-7xl mx-auto px-5 lg:px-8 py-12">
        <div className="grid gap-8 md:grid-cols-3 items-start">
          <div>
            <div className="font-bold text-lg text-ink">{COMPANY.longName}</div>
            <p className="mt-2 text-sm text-ink/70 max-w-xs">{COMPANY.tagline}</p>
          </div>
          <nav className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
            {links.map((l) => (
              <Link key={l.to} to={l.to} className="text-ink/70 hover:text-primary transition-colors">
                {l.label}
              </Link>
            ))}
          </nav>
          <div className="text-sm space-y-1">
            <a href={`mailto:${COMPANY.email}`} className="block text-ink/80 hover:text-primary">{COMPANY.email}</a>
            <a href={`tel:${COMPANY.phone.replace(/\s/g, '')}`} className="block text-ink/80 hover:text-primary">{COMPANY.phone}</a>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-sand flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
          <div className="flex flex-wrap items-center gap-2 text-xs text-ink/70">
            <span aria-hidden>🔒</span>
            <span className="inline-flex items-center gap-1 rounded-full bg-bg border border-sand px-3 py-1 font-medium">GDPR Compliant</span>
            <span className="inline-flex items-center gap-1 rounded-full bg-bg border border-sand px-3 py-1 font-medium">SOC2 Type II</span>
            <span className="inline-flex items-center gap-1 rounded-full bg-bg border border-sand px-3 py-1 font-medium">ISO Certified</span>
          </div>
          <div className="text-xs text-ink/60">
            © 2026 DOC Data Operations Company. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}
