import { style } from '@vanilla-extract/css'
import { vars } from '../styles/theme.css'

export const primaryButton = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '8px',
  padding: '12px 20px',
  borderRadius: vars.radii.md,
  backgroundColor: vars.color.brand,
  color: 'white',
  textDecoration: 'none',
  border: 'none',
  cursor: 'pointer',
  fontWeight: 600,
  boxShadow: vars.shadow.sm,
})

export const outlineButton = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '8px',
  padding: '12px 20px',
  borderRadius: vars.radii.md,
  backgroundColor: 'transparent',
  color: vars.color.text,
  textDecoration: 'none',
  border: `1px solid ${vars.color.border}`,
  cursor: 'pointer',
})

export const card = style({
  backgroundColor: vars.color.surface,
  borderRadius: vars.radii.lg,
  // border: `1px solid ${vars.color.border}`,
  boxShadow: vars.shadow.sm,
  padding: '20px',
})

export const pill = style({
  display: 'inline-flex',
  alignItems: 'center',
  padding: '4px 10px',
  borderRadius: '999px',
  backgroundColor: vars.color.background,
  border: `1px solid ${vars.color.border}`,
  fontSize: '12px',
  letterSpacing: '0.08em',
  textTransform: 'uppercase',
})

export const gridTwo = style({
  display: 'grid',
  gap: '24px',
  gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
})

export const gridThree = style({
  display: 'grid',
  gap: '24px',
  gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
})
