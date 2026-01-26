import { style } from '@vanilla-extract/css'
import { vars } from '../styles/theme.css'

export const overlay = style({
  position: 'fixed',
  inset: 0,
  backgroundColor: 'rgba(15, 23, 42, 0.55)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '24px',
  zIndex: 50,
})

export const modal = style({
  width: 'min(640px, 100%)',
  backgroundColor: vars.color.surface,
  borderRadius: vars.radii.lg,
  padding: '24px',
  boxShadow: vars.shadow.md,
  display: 'grid',
  gap: '12px',
})

export const modalHeader = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: '12px',
})

export const modalClose = style({
  border: 'none',
  backgroundColor: 'transparent',
  fontSize: '20px',
  cursor: 'pointer',
})

export const modalBody = style({
  fontSize: '14px',
  color: vars.color.textMuted,
  display: 'grid',
  gap: '8px',
})
