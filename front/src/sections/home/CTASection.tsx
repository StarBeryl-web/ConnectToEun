import { siteConfig } from '../../config/loadSiteConfig'
import { Container } from '../../components/Container'
import { Section } from '../../components/Section'
import { primaryButton } from '../../components/ui.css'
import { card } from '../../components/ui.css'

export const CTASection = () => {
  return (
    <Section>
      <Container>
        <div className={card}>
          <h2>지금 프로젝트를 시작해보세요</h2>
          <p>{siteConfig.brand.description}</p>
          <div style={{ marginTop: '16px' }}>
            <a className={primaryButton} href={siteConfig.contact.ctaHref}>
              {siteConfig.contact.ctaLabel}
            </a>
          </div>
        </div>
      </Container>
    </Section>
  )
}
