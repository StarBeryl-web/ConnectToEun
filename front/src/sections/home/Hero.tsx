import { useEffect, useState } from 'react'
import { siteConfig } from '../../config/loadSiteConfig'
import { Container } from '../../components/Container'
import { Section } from '../../components/Section'
import { primaryButton } from '../../components/ui.css'
import {
  heroCopy,
  heroGrid,
  heroTitle,
  heroBody,
  heroMuted,
  heroWrap,
  heroGlow,
  heroShell,
  heroScroll,
  heroScrollMouse,
  heroScrollWheel,
  pixel,
  pixelGrid,
  pixelGridHidden,
} from '../sections.css'

export const Hero = () => {
  const [showPixels, setShowPixels] = useState(true)
  const columns = 18
  const rows = 6
  const pixels = Array.from({ length: columns * rows }, (_, index) => {
    const col = index % columns
    const row = Math.floor(index / columns)
    const delay = col * 0.08 + row * 0.03
    const palette = ['rgba(133,10,255,0.7)', '#FB8564', '#64FB85']
    const color = palette[(col + row) % palette.length]
    return { key: `${row}-${col}`, delay, color }
  })
  useEffect(() => {
    const onScroll = () => {
      const threshold = window.innerHeight * 0.35
      setShowPixels(window.scrollY < threshold)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <Section>
      <Container>
        <div className={heroShell}>
          <div className={heroWrap}>
            <div className={heroGlow} />
            <div className={[pixelGrid, !showPixels ? pixelGridHidden : ''].filter(Boolean).join(' ')}>
              {pixels.map((item) => (
                <div
                  key={item.key}
                  className={pixel}
                  style={{
                    animationDelay: `${item.delay}s`,
                    opacity: 0,
                    backgroundColor: item.color,
                  }}
                />
              ))}
            </div>
            <div className={heroGrid}>
              <div className={heroCopy}>
                <h1 className={heroTitle}>{siteConfig.brand.name}</h1>
                <p className={[heroMuted, heroBody].join(' ')}>{siteConfig.brand.description}</p>
                <div style={{ marginTop: '24px', display: 'flex', justifyContent: 'center' }}>
                  <a className={primaryButton} href={siteConfig.contact.ctaHref}>
                    {siteConfig.contact.ctaLabel}
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className={heroScroll} aria-hidden="true">
            <div className={heroScrollMouse}>
              <span className={heroScrollWheel} />
            </div>
            <span>scroll down</span>
          </div>
        </div>
      </Container>
    </Section>
  )
}
