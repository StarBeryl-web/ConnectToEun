import { siteConfig } from '../../config/loadSiteConfig'
import { Container } from '../../components/Container'
import { Section } from '../../components/Section'
import { card, gridThree } from '../../components/ui.css'
import { sectionEyebrow, sectionTitle } from '../../styles/layout.css'

export const Team = () => {
  if (!siteConfig.data.team.length) return null

  return (
    <Section>
      <Container>
        <p className={sectionEyebrow}>Team</p>
        <h2 className={sectionTitle}>팀</h2>
        <div className={gridThree}>
          {siteConfig.data.team.map((member) => (
            <div key={member.name} className={card}>
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  )
}
