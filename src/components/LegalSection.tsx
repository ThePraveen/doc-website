import type { ReactNode } from 'react'

export function LegalSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="mb-8">
      <h2 className="text-xl font-bold text-ink mt-8 mb-3">{title}</h2>
      <div className="text-ink/80 leading-relaxed space-y-3">{children}</div>
    </section>
  )
}
