import type { CSSProperties } from 'react'
import { Container } from '../../components/Container'
import { Section } from '../../components/Section'
import { siteConfig } from '../../config/loadSiteConfig'
import { sectionEyebrow } from '../../styles/layout.css'
import {
  fadeInUp,
  newsItem,
  newsList,
  newsYear,
  sectionAlt,
  sectionIntro,
  sectionLead,
  sectionShell,
  sectionTitle,
} from './about.css'

export const AboutNewsroom = () => {
  if (!siteConfig.data.timeline.length) return null

  return (
    <Section className={`${sectionShell} ${sectionAlt}`}>
      <Container>
        <div className={sectionIntro}>
          <p className={sectionEyebrow}>Newsroom</p>
          <h2 className={sectionTitle}>최근 업데이트</h2>
          <p className={sectionLead}>
            새로운 성과와 변화의 순간을 빠르게 공유합니다.
          </p>
        </div>
        <div className={newsList}>
          {siteConfig.data.timeline.map((item, index) => (
            <div
              key={item.year}
              className={`${newsItem} ${fadeInUp}`}
              style={
                {
                  '--delay': `${index * 80}ms`,
                } as CSSProperties
              }
            >
              <span className={newsYear}>{item.year}</span>
              <strong>{item.event}</strong>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  )
}
