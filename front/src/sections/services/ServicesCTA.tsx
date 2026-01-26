import { siteConfig } from '../../config/loadSiteConfig'
import { Container } from '../../components/Container'
import { Section } from '../../components/Section'
import { primaryButton } from '../../components/ui.css'

export const ServicesCTA = () => {
  return (
    <Section>
      <Container>
        <h2>맞춤형 제안을 받아보세요</h2>
        <p>{siteConfig.contact.ctaLabel}을 통해 프로젝트 범위를 알려주세요.</p>
        <div style={{ marginTop: '16px' }}>
          <a className={primaryButton} href={siteConfig.contact.ctaHref}>
            {siteConfig.contact.ctaLabel}
          </a>
        </div>
      </Container>
    </Section>
  )
}
