import { siteConfig } from '../../config/loadSiteConfig'
import { Container } from '../../components/Container'
import { Section } from '../../components/Section'
import { card, gridThree, pill } from '../../components/ui.css'
import { sectionEyebrow, sectionTitle } from '../../styles/layout.css'

export const ServiceCards = () => {
  return (
    <Section>
      <Container>
        <p className={sectionEyebrow}>Services</p>
        <h2 className={sectionTitle}>서비스 카테고리</h2>
        <div className={gridThree}>
          {siteConfig.data.services.map((service) => (
            <div key={service.id} className={card}>
              <span className={pill}>{service.category}</span>
              <h3>{service.title}</h3>
              <p>{service.summary}</p>
              <ul>
                {service.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
              {service.link ? (
                <a href={service.link} target="_blank">
                  자세히 보기
                </a>
              ) : null}
            </div>
          ))}
        </div>
      </Container>
    </Section>
  )
}
