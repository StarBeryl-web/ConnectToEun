import { SEO } from '../components/SEO'
import { Hero } from '../sections/home/Hero'
import { TrustBadges } from '../sections/home/TrustBadges'
import { ServicesPreview } from '../sections/home/ServicesPreview'
import { CaseHighlights } from '../sections/home/CaseHighlights'
import { Testimonials } from '../sections/home/Testimonials'
import { CTASection } from '../sections/home/CTASection'
import { MapTeaser } from '../sections/home/MapTeaser'

export const HomePage = () => {
  return (
    <>
      <SEO pageKey="home" />
      <Hero />
      <TrustBadges />
      <ServicesPreview />
      <CaseHighlights />
      <Testimonials />
      <CTASection />
      <MapTeaser />
    </>
  )
}
