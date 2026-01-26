import { siteConfig } from '../../config/loadSiteConfig'
import { Container } from '../../components/Container'
import { Section } from '../../components/Section'
import { badges, chip } from '../sections.css'

export const TrustBadges = () => {
  return (
    <Section>
      <Container>
        <div className={badges}>
          {siteConfig.data.trustBadges.map((badge) => (
            <span key={badge} className={chip}>
              {badge}
            </span>
          ))}
        </div>
      </Container>
    </Section>
  )
}
