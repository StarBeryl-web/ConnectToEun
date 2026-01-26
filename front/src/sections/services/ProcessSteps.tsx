import { siteConfig } from '../../config/loadSiteConfig'
import { Container } from '../../components/Container'
import { Section } from '../../components/Section'
import { card, gridTwo } from '../../components/ui.css'
import { sectionEyebrow, sectionTitle } from '../../styles/layout.css'

export const ProcessSteps = () => {
  return (
    <Section>
      <Container>
        <p className={sectionEyebrow}>Process</p>
        <h2 className={sectionTitle}>진행 프로세스</h2>
        <div className={gridTwo}>
          {siteConfig.data.processSteps.map((step, index) => (
            <div key={step} className={card}>
              <strong>Step {index + 1}</strong>
              <p>{step}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  )
}
