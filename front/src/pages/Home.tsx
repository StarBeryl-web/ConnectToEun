import { SEO } from '../components/SEO'
import { Hero } from '../sections/home/Hero'
import { Information } from '../sections/home/Information'
import { ServicesPreview } from '../sections/home/ServicesPreview'
import { CTASection } from '../sections/home/CTASection'

export const HomePage = () => {
  return (
    <>
      <SEO pageKey="home" />
      <Hero />
      <Information />
      <ServicesPreview />
      <CTASection />
    </>
  )
}
