import { siteConfig } from '../../config/loadSiteConfig'
import { Container } from '../../components/Container'
import { Section } from '../../components/Section'
import { primaryButton } from '../../components/ui.css'
import { ctaCard, ctaSection } from './about.css'

export const AboutCTA = () => {
  return (
    <Section className={ctaSection}>
      <Container>
        <div className={ctaCard}>
          <h2>함께 성장할 준비가 되셨나요?</h2>
          <p>{siteConfig.brand.tagline || siteConfig.brand.description}</p>
          <div>
            <a className={primaryButton} href={siteConfig.contact.ctaHref}>
              {siteConfig.contact.ctaLabel}
            </a>
          </div>
        </div>
      </Container>
    </Section>
  )
}
