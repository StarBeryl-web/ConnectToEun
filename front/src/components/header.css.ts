import { globalStyle, style } from '@vanilla-extract/css'
import { vars } from '../styles/theme.css'

export const headerWrap = style({
  position: 'sticky',
  top: 0,
  zIndex: 60,
  backgroundColor: 'transparent',
})

export const headerSolid = style({
  backgroundColor: '#242427',
})

export const headerInner = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '16px',
  padding: '20px 0',
})

export const logo = style({
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
  fontFamily: vars.typography.heading,
  fontSize: 'clamp(14px, 6vw, 60px)',
  fontWeight: 700,
})

export const nav = style({
  display: 'flex',
  alignItems: 'center',
  gap: '30px',
  fontSize: '24px',
  fontWeight: 500,
  transition: 'opacity 200ms ease, transform 200ms ease',
})

globalStyle(`${nav} a`, {
  color: '#E6E6F1',
  transition: 'color 150ms ease',
})

globalStyle(`${nav} a:hover`, {
  color: '#8564fb',
})

export const navHidden = style({
  opacity: 1,
  transform: 'translateY(-70px)',
})

export const mobileToggle = style({
  display: 'none',
  color: '#fff',
  fontSize: '26px',
  width: '44px',
  height: '44px',
  borderRadius: '999px',
  backgroundColor: 'rgba(255,255,255,0.08)',
  border: '1px solid rgba(255,255,255,0.2)',
  alignItems: 'center',
  justifyContent: 'center',
  '@media': {
    '(max-width: 925px)': {
      display: 'inline-flex',
    },
  },
})

export const desktopNav = style({
  '@media': {
    '(max-width: 925px)': {
      display: 'none',
    },
  },
})

export const mobileNav = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '18px',
  padding: '80px 24px 32px',
  height: '100%',
  width: 'min(320px, 80vw)',
  color: '#ffffff',
  fontSize: '48px',
  fontWeight: 700,
  '@media': {
    '(max-width: 925px)': {
      display: 'flex',
    },
  },
})

export const mobileNavHidden = style({
  opacity: 0,
  transform: 'translateX(-16px)',
  pointerEvents: 'none',
})

export const mobileOverlay = style({
  position: 'fixed',
  inset: 0,
  zIndex: 30,
  background:
    'linear-gradient(135deg, #8564fb, #2e1199) 35%',
  clipPath: 'circle(0% at 100% 0%)',
  transition: 'clip-path 700ms ease',
  pointerEvents: 'none',
})

export const mobileOverlayOpen = style({
  clipPath: 'circle(150% at 100% 0%)',
  pointerEvents: 'auto',
})

export const mobileOverlayClose = style({
  position: 'absolute',
  top: '16px',
  right: '16px',
  color: '#ffffff',
  fontSize: '48px',
  lineHeight: 1,
  zIndex: 31,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '48px',
  height: '48px',
  borderRadius: '999px',
  backgroundColor: 'rgba(255,255,255,0.08)',
  border: '1px solid rgba(255,255,255,0.2)',
})

export const ctaGroup = style({
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
})

export const ctaDesktop = style({
  '@media': {
    '(max-width: 925px)': {
      display: 'none',
    },
  },
})
