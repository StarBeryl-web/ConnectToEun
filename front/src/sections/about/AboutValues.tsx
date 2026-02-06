import type { CSSProperties } from 'react'
import { Container } from '../../components/Container'
import { Section } from '../../components/Section'
import { siteConfig } from '../../config/loadSiteConfig'
import { sectionEyebrow } from '../../styles/layout.css'
import { withBase } from '../../utils/asset'
import {
  fadeInUp,
  sectionIntro,
  sectionLead,
  sectionShell,
  sectionTitle,
  valueCard,
  valueDescription,
  valueImage,
  valueLabel,
  valueContent,
  valueMedia,
  valuesGrid,
} from './about.css'

export const AboutValues = () => {
  if (!siteConfig.data.values.length) return null

  return (
    <Section className={sectionShell}>
      <Container>
        <div className={sectionIntro}>
          <p className={sectionEyebrow}>Values</p>
          <h2 className={sectionTitle}>우리가 지키는 원칙</h2>
          <p className={sectionLead}>
            모든 프로젝트가 공통으로 지향하는 기준입니다.
          </p>
        </div>
        <div className={valuesGrid}>
          {siteConfig.data.values.map((value, index) => (
            <div
              key={value.title}
              className={`${valueCard} ${fadeInUp}`}
              style={
                {
                  '--delay': `${index * 90}ms`,
                } as CSSProperties
              }
            >
              <div className={valueContent}>
                <span className={valueLabel}>{value.title}</span>
                {value.description ? (
                  <p className={valueDescription}>{value.description}</p>
                ) : null}
              </div>
              <div className={valueMedia}>
                {value.image ? (
                  <img
                    className={valueImage}
                    src={withBase(value.image)}
                    alt={value.title}
                    loading="lazy"
                  />
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  )
}
