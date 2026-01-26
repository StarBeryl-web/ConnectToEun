import { useEffect, useState } from 'react'
import { VscChromeClose, VscMenu } from 'react-icons/vsc'
import { siteConfig } from '../config/loadSiteConfig'
import { Container } from './Container'
import { primaryButton } from './ui.css'
import {
  ctaGroup,
  ctaDesktop,
  desktopNav,
  headerInner,
  headerWrap,
  logo,
  mobileNav,
  mobileOverlay,
  mobileOverlayOpen,
  mobileOverlayClose,
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
          <div className={[ctaGroup, ctaDesktop].join(' ')}>
            <a className={primaryButton} href={siteConfig.contact.ctaHref}>
              {siteConfig.contact.ctaLabel}
            </a>
          </div>
          <button
            className={mobileToggle}
            onClick={() => setOpen((prev) => !prev)}
            aria-expanded={open}
            aria-label="모바일 메뉴"
          >
            {open ? <VscChromeClose /> : <VscMenu />}
          </button>
        </div>
      </Container>
      <div
        className={[mobileOverlay, open ? mobileOverlayOpen : ''].filter(Boolean).join(' ')}
        onClick={() => setOpen(false)}
      >
        <button
          type="button"
          className={mobileOverlayClose}
          aria-label="모바일 메뉴 닫기"
          onClick={() => setOpen(false)}
        >
          <VscChromeClose />
        </button>
        <nav className={mobileNav} onClick={(event) => event.stopPropagation()}>
          {siteConfig.navigation.header.map((item) => (
            <a key={item.label} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
