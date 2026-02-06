import { SEO } from '../components/SEO'
import { AboutHero } from '../sections/about/AboutHero'
import { AboutFeatures } from '../sections/about/AboutFeatures'
import { AboutStories } from '../sections/about/AboutStories'
import { AboutNewsroom } from '../sections/about/AboutNewsroom'
import { AboutValues } from '../sections/about/AboutValues'
import { AboutCTA } from '../sections/about/AboutCTA'

export const AboutPage = () => {
  return (
    <>
      <SEO pageKey="about" />
      <AboutHero />
      <AboutValues />
      <AboutStories />
      <AboutFeatures />
      <AboutNewsroom />
      <AboutCTA />
    </>
  )
}
