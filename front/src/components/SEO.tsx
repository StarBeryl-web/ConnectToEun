import { Helmet } from 'react-helmet-async'
import { siteConfig } from '../config/loadSiteConfig'

export const SEO = ({ pageKey }: { pageKey: string }) => {
  const pageMeta = siteConfig.seo.pages?.[pageKey] ?? {}
  const title = pageMeta.title
    ? siteConfig.seo.titleTemplate.replace('%s', pageMeta.title)
    : siteConfig.seo.siteName

  const description = pageMeta.description ?? siteConfig.seo.description
  const canonical = siteConfig.seo.canonicalBase
    ? `${siteConfig.seo.canonicalBase}${window.location.pathname}`
    : undefined

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {canonical ? <link rel="canonical" href={canonical} /> : null}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={siteConfig.seo.ogImage} />
      <meta property="og:site_name" content={siteConfig.seo.siteName} />
      <meta name="twitter:card" content="summary_large_image" />
      {siteConfig.seo.twitterHandle ? (
        <meta name="twitter:creator" content={siteConfig.seo.twitterHandle} />
      ) : null}
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={siteConfig.seo.ogImage} />
    </Helmet>
  )
}
