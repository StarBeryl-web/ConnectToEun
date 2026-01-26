import { siteConfig } from '../../config/loadSiteConfig'
import { Container } from '../../components/Container'
import { Section } from '../../components/Section'
import { list } from '../sections.css'
import { sectionEyebrow, sectionTitle } from '../../styles/layout.css'

export const Timeline = () => {
  if (!siteConfig.data.timeline.length) return null

  return (
    <Section>
      <Container>
        <p className={sectionEyebrow}>Timeline</p>
        <h2 className={sectionTitle}>연혁</h2>
        <div className={list}>
          {siteConfig.data.timeline.map((item) => (
            <div key={item.year}>
              <strong>{item.year}</strong>
              <p>{item.event}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  )
}
