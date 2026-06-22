import { Link } from 'react-router-dom'
import { COMPANY } from '../constants'

const sections = [
  {
    title: 'Product',
    links: [
      { to: '/how-it-works', label: 'Data Generation' },
      { to: '/how-it-works', label: 'Data Annotation' },
      { to: '/how-it-works', label: 'Quality Check' },
    ],
  },
  {
    title: 'Company',
    links: [
      { to: '/about', label: 'About' },
      { to: '/careers', label: 'Careers' },
      { to: '/register-gig-worker', label: 'Register as Worker' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { to: '/privacy-policy', label: 'Privacy Policy' },
      { to: '/terms', label: 'Terms' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="mt-20 pt-16 pb-10 border-t border-line">
      <div className="max-w-[1240px] mx-auto px-7">
        <div className="grid gap-10 md:grid-cols-[1.4fr_repeat(3,1fr)] pb-10">
          <div>
            <div className="font-bold tracking-tight text-lg">{COMPANY.longName}</div>
            <p className="mt-3 text-[14.5px] text-muted max-w-xs">{COMPANY.tagline}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              <span className="chip">🔒 GDPR</span>
              <span className="chip">SOC2 II</span>
              <span className="chip">ISO</span>
            </div>
          </div>
          {sections.map((s) => (
            <div key={s.title}>
              <h4 className="text-[12px] font-semibold tracking-[0.08em] uppercase text-muted mb-4">{s.title}</h4>
              <ul className="space-y-2.5">
                {s.links.map((l) => (
                  <li key={l.label}>
                    <Link to={l.to} className="text-[14.5px] text-ink-2 hover:text-orb-purple transition-colors">
                      {l.label}
                    </Link>
                  </li>
                ))}
                {s.title === 'Legal' && (
                  <>
                    <li><a className="text-[14.5px] text-ink-2 hover:text-orb-purple" href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a></li>
                    <li><a className="text-[14.5px] text-ink-2 hover:text-orb-purple" href={`tel:${COMPANY.phone.replace(/\s/g, '')}`}>{COMPANY.phone}</a></li>
                  </>
                )}
              </ul>
            </div>
          ))}
        </div>
        <div className="pt-6 border-t border-line flex flex-wrap items-center justify-between gap-3 text-[13.5px] text-muted">
          <span>© 2026 DOC Data Operations Company. All rights reserved.</span>
          <span>Built with care · Premium training data for AI</span>
        </div>
      </div>
    </footer>
  )
}
