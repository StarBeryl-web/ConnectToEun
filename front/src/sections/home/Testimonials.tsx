import { siteConfig } from '../../config/loadSiteConfig'
import { Container } from '../../components/Container'
import { Section } from '../../components/Section'
import { card, gridTwo } from '../../components/ui.css'
import { sectionEyebrow, sectionTitle } from '../../styles/layout.css'

export const Testimonials = () => {
  return (
    <Section>
      <Container>
        <p className={sectionEyebrow}>Testimonials</p>
        <h2 className={sectionTitle}>고객 후기</h2>
        <div className={gridTwo}>
          {siteConfig.data.testimonials.map((item) => (
            <div key={item.name} className={card}>
              <p>“{item.quote}”</p>
              <strong>{item.name}</strong>
              <span>{item.role}</span>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  )
}
