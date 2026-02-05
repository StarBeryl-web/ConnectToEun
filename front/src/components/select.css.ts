import { style } from '@vanilla-extract/css'
import { vars } from '../styles/theme.css'

export const selectField = style({
  position: 'relative',
  width: '100%',
})

export const selectTrigger = style({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '10px',
  padding: '10px 12px',
  borderRadius: vars.radii.md,
  border: `1px solid rgba(230, 230, 241, 0.25)`,
  backgroundColor: vars.color.surface,
  color: vars.color.brandStrong,
  fontSize: '14px',
  cursor: 'pointer',
  transition: 'border-color 160ms ease, box-shadow 160ms ease, background-color 160ms ease',
  selectors: {
    '&:hover': {
      borderColor: vars.color.brand,
    },
    '&:focus-visible': {
      outline: 'none',
      borderColor: vars.color.accent,
      boxShadow: `0 0 0 3px rgba(251, 133, 100, 0.25)`,
    },
  },
})

export const selectPlaceholder = style({
  color: 'rgba(230, 230, 241, 0.7)',
})

export const selectCaret = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '18px',
  height: '18px',
  borderRadius: '999px',
  backgroundColor: 'rgba(255,255,255,0.08)',
  border: `1px solid rgba(230, 230, 241, 0.25)`,
  color: vars.color.brandStrong,
  fontSize: '12px',
})

export const selectMenu = style({
  position: 'absolute',
  top: 'calc(100% + 8px)',
  left: 0,
  right: 0,
  backgroundColor: vars.color.surface,
  border: `1px solid rgba(230, 230, 241, 0.25)`,
  borderRadius: vars.radii.md,
  boxShadow: vars.shadow.sm,
  maxHeight: '220px',
  overflowY: 'auto',
  zIndex: 30,
  padding: '6px',
  display: 'grid',
  gap: '4px',
})

export const selectOption = style({
  textAlign: 'left',
  padding: '10px 12px',
  borderRadius: vars.radii.sm,
  border: '1px solid transparent',
  backgroundColor: 'transparent',
  color: vars.color.brandStrong,
  cursor: 'pointer',
  fontSize: '14px',
  selectors: {
    '&:hover': {
      backgroundColor: vars.color.brand,
      borderColor: vars.color.brand,
      color: '#ffffff',
    },
    '&[data-selected=\"true\"]': {
      backgroundColor: 'rgba(133, 100, 251, 0.18)',
      borderColor: 'rgba(133, 100, 251, 0.4)',
      color: '#E6E6F1',
      fontWeight: 600,
    },
  },
})
