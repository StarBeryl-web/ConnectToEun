import { siteConfig } from '../../config/loadSiteConfig'
import { Container } from '../../components/Container'
import { Section } from '../../components/Section'
import { card, gridThree } from '../../components/ui.css'
import { sectionEyebrow, sectionTitle } from '../../styles/layout.css'

export const Values = () => {
  return (
    <Section>
      <Container>
        <p className={sectionEyebrow}>Values</p>
        <h2 className={sectionTitle}>우리의 가치</h2>
        <div className={gridThree}>
          {siteConfig.data.values.map((value) => (
            <div key={value.title} className={card}>
              <h3>{value.title}</h3>
              {value.description ? <p>{value.description}</p> : null}
            </div>
          ))}
        </div>
      </Container>
    </Section>
  )
}
