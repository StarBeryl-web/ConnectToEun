import { useEffect, useState } from 'react'
import { siteConfig } from '../config/loadSiteConfig'
import { Container } from './Container'
import { primaryButton } from './ui.css'
import {
  ctaGroup,
  desktopNav,
  headerInner,
  headerWrap,
  logo,
  mobileNav,
  mobileNavHidden,
  mobileToggle,
  nav,
  navHidden,
} from './header.css'

export const Header = () => {
  const [open, setOpen] = useState(false)
  const [atTop, setAtTop] = useState(true)

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  useEffect(() => {
    const onScroll = () => {
      setAtTop(window.scrollY < 16)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className={headerWrap}>
      <Container>
        <div className={headerInner}>
          <a href="#/" className={logo}>
            {siteConfig.brand.logoImage ? (
              <img src={siteConfig.brand.logoImage} alt={siteConfig.brand.name} height={32} />
            ) : null}
            <span>{siteConfig.brand.logoText}</span>
          </a>
          <nav className={[nav, desktopNav, !atTop ? navHidden : ''].filter(Boolean).join(' ')}>
            {siteConfig.navigation.header.map((item) => (
              <a key={item.label} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>
          <div className={ctaGroup}>
            <a className={primaryButton} href={siteConfig.contact.ctaHref}>
              {siteConfig.contact.ctaLabel}
            </a>
            <button
              className={mobileToggle}
              onClick={() => setOpen((prev) => !prev)}
              aria-expanded={open}
              aria-label="모바일 메뉴"
            >
              ☰
            </button>
          </div>
        </div>
      </Container>
      {open ? (
        <div className={[mobileNav, !atTop ? mobileNavHidden : ''].filter(Boolean).join(' ')}>
          {siteConfig.navigation.header.map((item) => (
            <a key={item.label} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </a>
          ))}
        </div>
      ) : null}
    </header>
  )
}
