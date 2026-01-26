import { useMemo, useState } from 'react'
import { siteConfig } from '../../config/loadSiteConfig'
import { Container } from '../../components/Container'
import { Section } from '../../components/Section'
import { card, gridThree, pill } from '../../components/ui.css'
import { sectionEyebrow, sectionTitle } from '../../styles/layout.css'

export const PortfolioList = () => {
  const [activeTag, setActiveTag] = useState('전체')

  const tags = useMemo(() => {
    const allTags = new Set<string>()
    siteConfig.data.portfolio.forEach((item) => item.tags.forEach((tag) => allTags.add(tag)))
    return ['전체', ...Array.from(allTags)]
  }, [])

  const filtered = siteConfig.data.portfolio.filter((item) =>
    activeTag === '전체' ? true : item.tags.includes(activeTag),
  )

  return (
    <Section>
      <Container>
        <p className={sectionEyebrow}>Portfolio</p>
        <h2 className={sectionTitle}>프로젝트</h2>
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '24px' }}>
          {tags.map((tag) => (
            <button key={tag} className={pill} onClick={() => setActiveTag(tag)}>
              {tag}
            </button>
          ))}
        </div>
        <div className={gridThree}>
          {filtered.map((item) => (
            <a key={item.id} href={item.href} className={card} target="_blank" rel="noreferrer">
              <img src={item.coverImage} alt={item.title} style={{ borderRadius: '12px' }} />
              <span className={pill}>{item.category}</span>
              <h3>{item.title}</h3>
              <p>{item.summary}</p>
            </a>
          ))}
        </div>
      </Container>
    </Section>
  )
}
