import type { CSSProperties } from 'react'
import { Container } from '../../components/Container'
import { Section } from '../../components/Section'
import { siteConfig } from '../../config/loadSiteConfig'
import { sectionEyebrow } from '../../styles/layout.css'
import {
  fadeInUp,
  sectionIntro,
  sectionLead,
  sectionShell,
  sectionTitle,
  storyCard,
  storyGrid,
  storyMeta,
  storyQuote,
} from './about.css'

export const AboutStories = () => {
  if (!siteConfig.data.testimonials.length) return null

  return (
    <Section className={sectionShell}>
      <Container>
        <div className={sectionIntro}>
          <p className={sectionEyebrow}>Peoples</p>
          <h2 className={sectionTitle}>함께 만든 변화</h2>
          <p className={sectionLead}>
            사용자와 팀이 경험한 변화의 목소리를 모았습니다.
          </p>
        </div>
        <div className={storyGrid}>
          {siteConfig.data.testimonials.map((story, index) => (
            <article
              key={story.name}
              className={`${storyCard} ${fadeInUp}`}
              style={
                {
                  '--delay': `${index * 120}ms`,
                } as CSSProperties
              }
            >
              <p className={storyQuote}>“{story.quote}”</p>
              <div className={storyMeta}>
                {story.name} · {story.role}
              </div>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  )
}
