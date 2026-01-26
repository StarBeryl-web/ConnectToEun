import { Container } from '../../components/Container'
import { Section } from '../../components/Section'
import { siteConfig } from '../../config/loadSiteConfig'
import { sectionEyebrow, sectionTitle } from '../../styles/layout.css'
import { mutedText } from '../sections.css'

export const Intro = () => {
  return (
    <Section>
      <Container>
        <p className={sectionEyebrow}>About</p>
        <h2 className={sectionTitle}>{siteConfig.brand.name}</h2>
        <p className={mutedText}>{siteConfig.brand.description}</p>
      </Container>
    </Section>
  )
}
