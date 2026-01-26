import { SEO } from '../components/SEO'
import { Intro } from '../sections/about/Intro'
import { Values } from '../sections/about/Values'
import { Team } from '../sections/about/Team'
import { Timeline } from '../sections/about/Timeline'
import { AboutCTA } from '../sections/about/AboutCTA'

export const AboutPage = () => {
  return (
    <>
      <SEO pageKey="about" />
      <Intro />
      <Values />
      <Team />
      <Timeline />
      <AboutCTA />
    </>
  )
}
