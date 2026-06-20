import { Helmet } from 'react-helmet-async'

type Props = {
  title: string
  description: string
  path?: string
}

export default function SEO({ title, description, path = '/' }: Props) {
  const fullTitle = `${title} · DOC — Data Operations Company`
  const url = `https://doc.example.com${path}` // PLACEHOLDER: production domain
  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <link rel="canonical" href={url} />
    </Helmet>
  )
}
