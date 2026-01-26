import { style } from '@vanilla-extract/css'
import { vars } from './theme.css'

export const container = style({
  width: '100%',
  maxWidth: vars.layout.maxWidth,
  margin: '0 auto',
  padding: `0 ${vars.layout.gutter}`,
})

export const section = style({
  padding: `${vars.layout.sectionSpacing} 0`,
})

export const sectionTitle = style({
  fontSize: 'clamp(28px, 3vw, 40px)',
  marginBottom: '16px',
})

export const sectionEyebrow = style({
  fontSize: '13px',
  letterSpacing: '0.18em',
  textTransform: 'uppercase',
  color: vars.color.textMuted,
  marginBottom: '8px',
})
