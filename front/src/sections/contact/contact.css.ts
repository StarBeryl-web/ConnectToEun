import { style } from '@vanilla-extract/css'
import { vars } from '../../styles/theme.css'

export const contactTokens = {
  radius: vars.radii.lg,
  radiusSm: vars.radii.md,
  border: `1px solid ${vars.color.border}`,
  shadow: vars.shadow.sm,
  spacing: {
    xs: '6px',
    sm: '10px',
    md: '16px',
    lg: '22px',
    xl: '28px',
  },
}

export const formCard = style({
  backgroundColor: vars.color.surface,
  border: contactTokens.border,
  borderRadius: contactTokens.radius,
  boxShadow: contactTokens.shadow,
  padding: contactTokens.spacing.lg,
  display: 'grid',
  gap: contactTokens.spacing.lg,
})

export const formHeader = style({
  display: 'grid',
  gap: contactTokens.spacing.xs,
})

export const formTitle = style({
  fontSize: '22px',
  margin: 0,
  color: vars.color.brandStrong,
})

export const formSubtitle = style({
  margin: 0,
  color: vars.color.textMuted,
  fontSize: '14px',
})

export const section = style({
  display: 'grid',
  gap: contactTokens.spacing.md,
})

export const sectionTitle = style({
  fontSize: '18px',
  margin: 0,
  color: vars.color.brandStrong,
})

export const fieldGrid = style({
  display: 'grid',
  gap: contactTokens.spacing.md,
  gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
})

export const fieldStack = style({
  display: 'grid',
  gap: contactTokens.spacing.md,
})

export const label = style({
  display: 'grid',
  gap: contactTokens.spacing.xs,
  fontSize: '14px',
  color: vars.color.text,
})

const baseInput = {
  width: '100%',
  padding: '10px 12px',
  borderRadius: contactTokens.radiusSm,
  border: contactTokens.border,
  backgroundColor: '#ffffff',
  color: vars.color.text,
  fontSize: '14px',
}

export const input = style({
  ...baseInput,
})

export const select = style({
  ...baseInput,
  appearance: 'none',
  backgroundImage:
    'linear-gradient(45deg, transparent 50%, rgba(0,0,0,0.4) 50%), linear-gradient(135deg, rgba(0,0,0,0.4) 50%, transparent 50%)',
  backgroundPosition: 'calc(100% - 16px) 55%, calc(100% - 11px) 55%',
  backgroundSize: '5px 5px, 5px 5px',
  backgroundRepeat: 'no-repeat',
})

export const textarea = style({
  ...baseInput,
  resize: 'vertical',
})

export const checkboxGrid = style({
  display: 'grid',
  gap: contactTokens.spacing.xs,
  gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
})

export const checkboxItem = style({
  display: 'flex',
  alignItems: 'center',
  gap: contactTokens.spacing.xs,
  fontSize: '14px',
})

export const radioGroup = style({
  display: 'grid',
  gap: contactTokens.spacing.xs,
})

export const radioItem = style({
  display: 'flex',
  alignItems: 'center',
  gap: contactTokens.spacing.xs,
  fontSize: '14px',
})

export const helperText = style({
  margin: 0,
  fontSize: '13px',
  color: vars.color.textMuted,
})

export const buttonRow = style({
  display: 'flex',
  flexWrap: 'wrap',
  gap: contactTokens.spacing.sm,
})

export const primaryButton = style({
  padding: '12px 18px',
  borderRadius: contactTokens.radiusSm,
  border: 'none',
  backgroundColor: vars.color.brand,
  color: '#ffffff',
  fontWeight: 600,
  cursor: 'pointer',
  boxShadow: contactTokens.shadow,
})

export const secondaryButton = style({
  padding: '12px 18px',
  borderRadius: contactTokens.radiusSm,
  border: contactTokens.border,
  backgroundColor: '#ffffff',
  color: vars.color.text,
  fontWeight: 600,
  cursor: 'pointer',
})

export const emailRow = style({
  display: 'grid',
  gap: contactTokens.spacing.sm,
  gridTemplateColumns: '1fr auto',
  alignItems: 'center',
  '@media': {
    '(max-width: 640px)': {
      gridTemplateColumns: '1fr',
    },
  },
})

export const toastRegion = style({
  position: 'fixed',
  bottom: contactTokens.spacing.lg,
  right: contactTokens.spacing.lg,
  zIndex: 50,
  pointerEvents: 'none',
})

export const toastCard = style({
  display: 'flex',
  alignItems: 'center',
  gap: contactTokens.spacing.sm,
  backgroundColor: vars.color.surface,
  border: contactTokens.border,
  borderRadius: contactTokens.radiusSm,
  boxShadow: contactTokens.shadow,
  padding: '12px 16px',
  color: vars.color.text,
  pointerEvents: 'auto',
})

export const toastIcon = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
})

export const toastMessage = style({
  fontSize: '14px',
  margin: 0,
})
