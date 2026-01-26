import { style } from '@vanilla-extract/css'
import { vars } from '../styles/theme.css'

export const footerWrap = style({
  borderTop: `1px solid ${vars.color.border}`,
  backgroundColor: vars.color.surface,
})

export const footerInner = style({
  padding: '32px 0',
  display: 'grid',
  gap: '24px',
  gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
})

export const footerTitle = style({
  fontWeight: 600,
  marginBottom: '12px',
})

export const footerList = style({
  display: 'grid',
  gap: '8px',
  fontSize: '14px',
  color: vars.color.textMuted,
})

export const footerMeta = style({
  fontSize: '12px',
  color: vars.color.textMuted,
  paddingBottom: '24px',
})
