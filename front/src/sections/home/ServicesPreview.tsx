import { useEffect, useRef, useState } from 'react'
import { siteConfig } from '../../config/loadSiteConfig'
import { Container } from '../../components/Container'
import { Section } from '../../components/Section'
import {
  servicesBody,
  servicesCard,
  servicesCardActive,
  servicesEyebrow,
  servicesItemLayout,
  servicesLayout,
  servicesLine,
  servicesMetaRow,
  servicesMobileList,
  servicesNumberStack,
  servicesPin,
  servicesRow,
  servicesNumber,
  servicesSticky,
  servicesTitle,
  servicesVisual,
  servicesVisualBox,
  servicesVisualImage,
} from '../sections.css'

export const ServicesPreview = () => {
  const items = siteConfig.data.services.slice(0, 3)
  const sectionRef = useRef<HTMLDivElement | null>(null)
  const [index, setIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const media = window.matchMedia('(max-width: 720px)')
    const onMediaChange = () => setIsMobile(media.matches)
    onMediaChange()
    media.addEventListener('change', onMediaChange)
    return () => media.removeEventListener('change', onMediaChange)
  }, [])

  useEffect(() => {
    if (isMobile) return
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
  }, [items.length, isMobile])

  if (isMobile) {
    return (
      <Section>
        <Container>
          <div className={servicesMobileList}>
            {items.map((service, idx) => (
              <div key={service.id} className={servicesItemLayout}>
                <div className={servicesRow}>
                  <div className={servicesNumberStack}>
                    <span className={servicesNumber}>{String(idx + 1).padStart(2, '0')}</span>
                    <div className={servicesLine} />
                  </div>
                  <div className={servicesCard}>
                    <div className={servicesMetaRow}>
                      <span className={servicesEyebrow}>{service.category}</span>
                    </div>
                    <h3 className={servicesTitle}>{service.title}</h3>
                    <p className={servicesBody}>{service.summary}</p>
                    <p className={servicesBody}>{service.bullets.join(' · ')}</p>
                  </div>
                </div>
                <div className={servicesVisual} aria-hidden="true">
                  <div className={servicesVisualBox}>
                    {service.image ? (
                      <img
                        className={servicesVisualImage}
                        src={service.image}
                        alt={service.title}
                      />
                    ) : null}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>
    )
  }

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
                <div className={servicesVisual}>
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
        </div>
      </Container>
    </Section>
  )
}
