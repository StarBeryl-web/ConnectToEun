import { SEO } from '../components/SEO'
import { Hero } from '../sections/home/Hero'
import { Information } from '../sections/home/Information'
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
      <Information />
      <ServicesPreview />
      <CaseHighlights />
      <Testimonials />
      <CTASection />
      <MapTeaser />
    </>
  )
}
