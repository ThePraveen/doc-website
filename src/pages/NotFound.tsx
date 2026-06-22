import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import PageTransition from '../components/PageTransition'

export default function NotFound() {
  return (
    <PageTransition>
      <SEO title="Page Not Found" description="The page you're looking for doesn't exist." path="/404" />
      <section className="max-w-3xl mx-auto px-6 py-32 text-center">
        <div className="text-7xl font-bold grad-color">404</div>
        <h1 className="mt-4 text-3xl font-bold tracking-[-0.025em]">Page not found</h1>
        <p className="mt-3 text-muted">The page you're looking for has moved or never existed.</p>
        <Link to="/" className="btn-dark mt-8">Back to home</Link>
      </section>
    </PageTransition>
  )
}
