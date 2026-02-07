import type { CSSProperties } from 'react'
import { Container } from '../../components/Container'
import { Section } from '../../components/Section'
import { sectionEyebrow } from '../../styles/layout.css'
import {
  fadeInUp,
  sectionIntro,
  sectionLead,
  sectionShell,
  sectionTitle,
  timelineContent,
  timelineDate,
  timelineDot,
  timelineIssuer,
  timelineItem,
  timelineList,
  timelineTitle,
} from './about.css'

const awards = [
  {
    date: '2023.12',
    title: '한이음 ICT 멘토링 공모전 은상 수상',
    issuer: '과학기술정보통신부 소관 정보통신기획평가원장(IITP) 명의 수여',
  },
  {
    date: '2024.11',
    title: '2024 한국디지털콘텐츠학회 추계종합학술대회 동상 수상',
  },
  {
    date: '2026.02',
    title: '25년차 lead designer 합류',
    issuer: '웹 전문 UI/UX 디자이너, 대기업 근무 외 5000건 프로젝트 참여 경력',
  },
]

export const AboutStories = () => {
  if (!awards.length) return null

  return (
    <Section className={sectionShell}>
      <Container>
        <div className={sectionIntro}>
          <p className={sectionEyebrow}>Awards</p>
          <h2 className={sectionTitle}>연도별 기록</h2>
          <p className={sectionLead}>
            매년 쌓아온 도전과 성과를 한 눈에 확인할 수 있습니다.
          </p>
        </div>
        <div className={timelineList}>
          {awards.map((award, index) => (
            <article
              key={`${award.date}-${award.title}`}
              className={`${timelineItem} ${fadeInUp}`}
              style={
                {
                  '--delay': `${index * 120}ms`,
                } as CSSProperties
              }
            >
              <span className={timelineDot} aria-hidden="true" />
              <div className={timelineDate}>{award.date}</div>
              <div className={timelineContent}>
                <p className={timelineTitle}>{award.title}</p>
                {award.issuer ? (
                  <div className={timelineIssuer}>{award.issuer}</div>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  )
}
