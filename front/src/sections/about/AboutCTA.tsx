import { siteConfig } from '../../config/loadSiteConfig'
import { Container } from '../../components/Container'
import { Section } from '../../components/Section'
import { primaryButton } from '../../components/ui.css'

export const AboutCTA = () => {
  return (
    <Section>
      <Container>
        <h2>함께 성장할 준비가 되셨나요?</h2>
        <p>{siteConfig.brand.tagline}</p>
        <div style={{ marginTop: '16px' }}>
          <a className={primaryButton} href={siteConfig.contact.ctaHref}>
            {siteConfig.contact.ctaLabel}
          </a>
        </div>
      </Container>
    </Section>
  )
}
