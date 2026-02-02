import { useEffect, useRef, useState } from 'react'
import { siteConfig } from '../../config/loadSiteConfig'
import { Container } from '../../components/Container'
import { Section } from '../../components/Section'
import {
  servicesBody,
  servicesCard,
  servicesCardActive,
  servicesEyebrow,
  servicesLayout,
  servicesLine,
  servicesMetaRow,
  servicesNumberStack,
  servicesPin,
  servicesRow,
  servicesNumber,
  servicesSticky,
  servicesTitle,
  servicesVisual,
  servicesVisualImage,
} from '../sections.css'

export const ServicesPreview = () => {
  const items = siteConfig.data.services.slice(0, 3)
  const sectionRef = useRef<HTMLDivElement | null>(null)
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      if (!sectionRef.current) return
      const rect = sectionRef.current.getBoundingClientRect()
      const total = rect.height - window.innerHeight
      const current = Math.min(Math.max(-rect.top, 0), total)
      const ratio = total > 0 ? current / total : 0
      const nextIndex = Math.min(items.length - 1, Math.floor(ratio * items.length))
      setIndex(nextIndex)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [items.length])

  return (
    <Section>
      <Container>
        <div ref={sectionRef} className={servicesPin}>
          <div className={servicesSticky}>
            <div className={servicesLayout}>
              <div style={{ display: 'grid', gap: '20px' }}>
                {items[index] ? (
                  <div className={servicesRow}>
                    <div className={servicesNumberStack}>
                      <span className={servicesNumber}>{String(index + 1).padStart(2, '0')}</span>
                      <div className={servicesLine} />
                    </div>
                    <div className={[servicesCard, servicesCardActive].join(' ')}>
                      <div className={servicesMetaRow}>
                        <span className={servicesEyebrow}>{items[index].category}</span>
                      </div>
                      <h3 className={servicesTitle}>{items[index].title}</h3>
                      <p className={servicesBody}>{items[index].summary}</p>
                      <p className={servicesBody}>{items[index].bullets.join(' · ')}</p>
                    </div>
                  </div>
                ) : null}
              </div>
              <div className={servicesVisual} aria-hidden="true">
                {items[index]?.image ? (
                  <img
                    className={servicesVisualImage}
                    src={items[index].image}
                    alt={items[index].title}
                  />
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}