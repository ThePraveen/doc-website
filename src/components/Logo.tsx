import { Link } from 'react-router-dom'

export default function Logo() {
  return (
    <Link to="/" className="flex items-center gap-3" aria-label="DOC home">
      <span
        className="grid place-items-center w-9 h-9 rounded-[11px] font-extrabold text-white text-[13px]"
        style={{
          background: 'linear-gradient(135deg, #1D1D1F 0%, #3A3A3C 100%)',
          boxShadow:
            'inset 0 1px 0 rgba(255,255,255,0.25), inset 0 -1px 0 rgba(0,0,0,0.4), 0 6px 14px -4px rgba(0,0,0,0.25)',
        }}
      >
        D
      </span>
      <span className="font-bold text-[17px] tracking-tight text-ink">DOC</span>
    </Link>
  )
}
