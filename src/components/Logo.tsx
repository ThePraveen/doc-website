import { Link } from 'react-router-dom'

export default function Logo() {
  return (
    <Link to="/" className="flex items-center gap-2 group" aria-label="DOC home">
      <div className="relative w-9 h-9 rounded-md bg-primary text-bg flex items-center justify-center font-bold text-sm tracking-tight overflow-hidden">
        <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 gap-px opacity-25 pointer-events-none">
          {Array.from({ length: 9 }).map((_, i) => (
            <div key={i} className="bg-bg/40" />
          ))}
        </div>
        <span className="relative">D</span>
      </div>
      <span className="text-xl font-bold tracking-tight text-ink group-hover:text-primary transition-colors">
        DOC
      </span>
    </Link>
  )
}
