import { siteConfig } from '../../config/loadSiteConfig'
import { Container } from '../../components/Container'
import { Section } from '../../components/Section'
import { highlight, split } from '../sections.css'
import { sectionEyebrow, sectionTitle } from '../../styles/layout.css'

export const CaseHighlights = () => {
  return (
    <Section>
      <Container>
        <p className={sectionEyebrow}>Highlights</p>
        <h2 className={sectionTitle}>성과 하이라이트</h2>
        <div className={split}>
          {siteConfig.data.highlights.map((item) => (
            <div key={item.title} className={highlight}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  )
}
