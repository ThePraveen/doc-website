import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import PageTransition from '../components/PageTransition'

export default function NotFound() {
  return (
    <PageTransition>
      <SEO title="Page Not Found" description="The page you're looking for doesn't exist." path="/404" />
      <section className="max-w-3xl mx-auto px-5 lg:px-8 py-32 text-center">
        <div className="text-7xl font-bold text-primary">404</div>
        <h1 className="mt-4 text-3xl font-bold">Page not found</h1>
        <p className="mt-3 text-ink/70">The page you're looking for has moved or never existed.</p>
        <Link to="/" className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary hover:bg-secondary px-6 py-3 font-semibold text-bg">
          Back to home
        </Link>
      </section>
    </PageTransition>
  )
}
