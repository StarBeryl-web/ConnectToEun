import { useEffect, useRef } from 'react'
import { Section } from '../../components/Section'
import { siteConfig } from '../../config/loadSiteConfig'
import { withBase } from '../../utils/asset'
import {
  heroBackdrop,
  heroCenter,
  heroFrame,
  heroHeadline,
  heroImage,
  heroIntro,
  heroScrim,
  heroSection,
  heroStage,
  heroStageReleased,
  heroStickyContainer,
  heroStickyWrap,
  heroTitleWrap,
} from './about.css'

const clamp = (value: number, min: number, max: number) =>
  Math.min(max, Math.max(min, value))

export const AboutHero = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null)
  const stageRef = useRef<HTMLDivElement | null>(null)
  const frameRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const update = () => {
      if (!sectionRef.current || !frameRef.current || !stageRef.current) return
      const rect = sectionRef.current.getBoundingClientRect()
      const scrollY = window.scrollY
      const top = scrollY + rect.top
      const height = rect.height
      const viewport = window.innerHeight
      const start = top
      const end = top + height - viewport
      const progress = end <= start ? 1 : clamp((scrollY - start) / (end - start), 0, 1)
      const scaleProgress = Math.min(progress / 0.8, 1)
      const scale = 1 - scaleProgress * 0.30
      const intro = clamp((progress - 0.30) / 0.2, 0, 1)
      const headlineOpacity = 1 - intro
      const roundProgress = clamp((scaleProgress - 0.55) / 0.35, 0, 1)
      const radius = 36 * roundProgress
      const shadowStrength = 0.5 + 0.35 * roundProgress
      const padding = 24 * roundProgress
      const released = scrollY >= end
      const gray = clamp((scaleProgress - 0.3) / 0.6, 0, 1)
      const brightness = 1 - 0.7 * gray

      frameRef.current.style.setProperty('--hero-scale', scale.toFixed(3))
      frameRef.current.style.setProperty('--hero-intro', intro.toFixed(3))
      frameRef.current.style.setProperty('--hero-headline', headlineOpacity.toFixed(3))
      frameRef.current.style.setProperty('--hero-gray', gray.toFixed(3))
      frameRef.current.style.setProperty('--hero-brightness', brightness.toFixed(3))
      frameRef.current.style.setProperty('--hero-radius', `${radius}px`)
      frameRef.current.style.setProperty(
        '--hero-shadow',
        `0 40px 80px rgba(8, 12, 24, ${shadowStrength})`,
      )
      stageRef.current.style.setProperty('--hero-padding', `${padding}px`)
      stageRef.current.classList.toggle(heroStageReleased, released)
    }

    let raf = 0
    const onScroll = () => {
      if (raf) return
      raf = window.requestAnimationFrame(() => {
        raf = 0
        update()
      })
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (raf) window.cancelAnimationFrame(raf)
    }
  }, [])

  const heroImageSrc =
    siteConfig.brand.aboutHeroImage ||
    siteConfig.brand.heroImage ||
    siteConfig.data.portfolio[0]?.coverImage ||
    '/branding/about_hero.png'
  const headline =
    siteConfig.brand.tagline || '가치를 선명하게\n새로운 기회로 연결'

  return (
    <Section className={heroSection}>
      <div className={heroBackdrop} aria-hidden="true" />
      <div className={heroStickyWrap} ref={sectionRef}>
        <div className={heroStickyContainer}>
          <div className={heroStage} ref={stageRef}>
            <div className={heroFrame} ref={frameRef}>
              <img
                className={heroImage}
                src={withBase(heroImageSrc)}
                alt={`${siteConfig.brand.name} 소개 이미지`}
                loading="eager"
              />
              <div className={heroScrim} aria-hidden="true" />
              <div className={heroCenter}>
                <div className={heroTitleWrap}>
                  <h1 className={heroHeadline}>{headline}</h1>
                </div>
              </div>
              <p className={heroIntro}>
                웹사이트를 만드는 목적에서 벗어나지 
                {'\n'}
                않게 해드립니다.
                기획· 디자인· 개발
                {'\n'}
                전 과정을 책임지는 풀스택 개발자이자, 
                {'\n'}
                데이터사이언스·AI 전공자로서 
                {'\n'}
                전문적인 인사이트를 제공합니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}
