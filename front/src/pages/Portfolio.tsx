import { SEO } from '../components/SEO'
import { PortfolioList } from '../sections/portfolio/PortfolioList'

export const PortfolioPage = () => {
  return (
    <>
      <SEO pageKey="portfolio" />
      <PortfolioList />
    </>
  )
}
