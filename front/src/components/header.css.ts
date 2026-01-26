import { style } from '@vanilla-extract/css'
import { vars } from '../styles/theme.css'

export const headerWrap = style({
  position: 'sticky',
  top: 0,
  zIndex: 20,
  backgroundColor: 'transparent',
})

export const headerInner = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '16px',
  padding: '16px 0',
})

export const logo = style({
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
  fontFamily: vars.typography.heading,
  fontSize: 'clamp(18px, 5vw, 30px)',
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

export const navHidden = style({
  opacity: 1,
  transform: 'translateY(-50px)',
})

export const mobileToggle = style({
  display: 'none',
  background: 'none',
  border: 'none',
  fontSize: '20px',
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
  display: 'none',
  flexDirection: 'column',
  gap: '12px',
  padding: '16px',
  borderTop: `1px solid ${vars.color.border}`,
  backgroundColor: vars.color.surface,
  transition: 'opacity 200ms ease, transform 200ms ease',
  '@media': {
    '(max-width: 925px)': {
      display: 'flex',
    },
  },
})

export const mobileNavHidden = style({
  opacity: 0.75,
  transform: 'translateY(-8px)',
})

export const ctaGroup = style({
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
})
