import type { CSSProperties } from 'react'
import { Container } from '../../components/Container'
import { Section } from '../../components/Section'
import { siteConfig } from '../../config/loadSiteConfig'
import { sectionEyebrow } from '../../styles/layout.css'
import {
  fadeInUp,
  featureCard,
  featureGrid,
  featureList,
  featureTag,
  sectionIntro,
  sectionLead,
  sectionShell,
  sectionTitle,
} from './about.css'

export const AboutFeatures = () => {
  if (!siteConfig.data.services.length) return null

  return (
    <Section className={sectionShell}>
      <Container>
        <div className={sectionIntro}>
          <p className={sectionEyebrow}>Features</p>
          <h2 className={sectionTitle}>모두를 위한 경험 설계</h2>
          <p className={sectionLead}>
            접근성과 성과를 함께 고려한 흐름으로 브랜드의 메시지를 전달합니다.
          </p>
        </div>
        <div className={featureGrid}>
          {siteConfig.data.services.map((service, index) => (
            <article
              key={service.id}
              className={`${featureCard} ${fadeInUp}`}
              style={
                {
                  '--delay': `${index * 100}ms`,
                } as CSSProperties
              }
            >
              <div>
                <span className={featureTag}>{service.category}</span>
                <h3>{service.title}</h3>
                <p>{service.summary}</p>
              </div>
              <ul className={featureList}>
                {service.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  )
}
