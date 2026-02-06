import type { CSSProperties } from 'react'
import { Container } from '../../components/Container'
import { Section } from '../../components/Section'
import { siteConfig } from '../../config/loadSiteConfig'
import { withBase } from '../../utils/asset'
import { sectionEyebrow } from '../../styles/layout.css'
import {
  fadeInUp,
  resourceBody,
  resourceCard,
  resourceGrid,
  resourceMedia,
  resourceImage,
  resourceTag,
  resourceTags,
  sectionAlt,
  sectionIntro,
  sectionLead,
  sectionShell,
  sectionTitle,
} from './about.css'

export const AboutResources = () => {
  if (!siteConfig.data.portfolio.length) return null

  return (
    <Section className={`${sectionShell} ${sectionAlt}`}>
      <Container>
        <div className={sectionIntro}>
          <p className={sectionEyebrow}>Resources</p>
          <h2 className={sectionTitle}>프로젝트 리소스</h2>
          <p className={sectionLead}>
            전달력을 높인 프로젝트 사례를 통해 우리의 방향을 확인하세요.
          </p>
        </div>
        <div className={resourceGrid}>
          {siteConfig.data.portfolio.map((item, index) => (
            <article
              key={item.id}
              className={`${resourceCard} ${fadeInUp}`}
              style={
                {
                  '--delay': `${index * 100}ms`,
                } as CSSProperties
              }
            >
              <div className={resourceMedia}>
                <img
                  className={resourceImage}
                  src={withBase(item.coverImage)}
                  alt={item.title}
                />
              </div>
              <div className={resourceBody}>
                <span className={resourceTag}>{item.category}</span>
                <h3>{item.title}</h3>
                <p>{item.summary}</p>
                <div className={resourceTags}>
                  {item.tags.map((tag) => (
                    <span key={tag} className={resourceTag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  )
}
