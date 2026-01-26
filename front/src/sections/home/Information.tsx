import { useEffect, useRef, useState } from 'react'
import { Container } from '../../components/Container'
import { Section } from '../../components/Section'
import {
  infoCenter,
  infoDesc,
  infoDescSmall,
  infoPin,
  infoSticky,
  infoWord,
  infoWordFill,
} from '../sections.css'

export const Information = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      if (!sectionRef.current) return
      const rect = sectionRef.current.getBoundingClientRect()
      const startOffset = 400
      const total = rect.height - window.innerHeight + startOffset
      const current = Math.min(Math.max(-rect.top + startOffset, 0), total)
      const ratio = total > 0 ? current / total : 0
      setProgress(ratio)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const fillAll = Math.min(progress / 0.33, 1)
  const fillIn = Math.min(Math.max((progress - 0.33) / 0.33, 0), 1)
  const fillOne = Math.min(Math.max((progress - 0.66) / 0.34, 0), 1)
  const descOpacity = (0.35 + progress * 0.65).toFixed(2)

  return (
    <Section>
      <Container>
        <div ref={sectionRef} className={infoPin}>
          <div className={infoSticky}>
            <div className={infoCenter} style={{ '--desc': descOpacity } as React.CSSProperties}>
              <span
                className={[infoWord, infoWordFill].join(' ')}
                style={{ '--fill-word': `${Math.round(fillAll * 100)}%` } as React.CSSProperties}
              >
                ALL
              </span>
              <span
                className={[infoWord, infoWordFill].join(' ')}
                style={{ '--fill-word': `${Math.round(fillIn * 100)}%` } as React.CSSProperties}
              >
                IN
              </span>
              <span
                className={[infoWord, infoWordFill].join(' ')}
                style={{ '--fill-word': `${Math.round(fillOne * 100)}%` } as React.CSSProperties}
              >
                ONE
              </span>
              <p className={infoDesc}>
                기획 · 디자인 · 개발 시작부터 끝까지.
              </p>
              <p className={infoDescSmall}>
                단계는 줄이고 속도는 높였습니다.
                <br />
                한 번의 미팅으로 방향을 정리하여 
                <br />
                복잡한 과정과 비용을 줄여드립니다
              </p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
