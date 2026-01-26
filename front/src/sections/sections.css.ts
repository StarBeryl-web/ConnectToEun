import { keyframes, style } from '@vanilla-extract/css'
import { vars } from '../styles/theme.css'

export const hero = style({
  display: 'grid',
  gap: '32px',
  alignItems: 'center',
  gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
})

export const heroWrap = style({
  position: 'relative',
  overflow: 'hidden',
  borderRadius: vars.radii.lg,
  border: `1px solid ${vars.color.border}`,
  minHeight: 'clamp(520px, 90svh, 600px)',
  padding: 'clamp(28px, 5vw, 56px)',
  background:
    'linear-gradient(120deg, rgba(133,10,255,0.16), rgba(255,133,10,0.12) 40%, rgba(10,255,133,0.12) 80%), linear-gradient(180deg, rgba(8,12,24,0.72), rgba(8,12,24,0.92))',
  boxShadow: vars.shadow.md,
})

export const heroGrid = style({
  display: 'grid',
  gap: '28px',
  alignItems: 'center',
  gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
  position: 'relative',
  zIndex: 2,
  minHeight: '100%',
})

export const heroCopy = style({
  color: 'rgba(255,255,255,0.92)',
  display: 'grid',
  gap: '14px',
})

export const heroTitle = style({
  fontSize: 'clamp(32px, 5vw, 70px)',
  lineHeight: 1.05,
  letterSpacing: '-0.02em',
})

export const heroBody = style({
  fontSize: 'clamp(14px, 1.4vw, 28px)',
  lineHeight: 1.6,
})

export const heroMuted = style({
  color: 'rgba(255, 255, 255, 0.9)',
})

export const heroTagline = style({
  fontSize: 'clamp(20px, 2.5vw, 35px)',
  letterSpacing: '0.12em',
  textTransform: 'uppercase',
})

export const heroGlow = style({
  position: 'absolute',
  inset: '-20%',
  background:
    'radial-gradient(40% 35% at 20% 30%, rgba(133,10,255,0.35), transparent 60%), radial-gradient(45% 40% at 80% 20%, rgba(255,133,10,0.28), transparent 60%), radial-gradient(40% 40% at 70% 80%, rgba(10,255,133,0.24), transparent 60%)',
  filter: 'blur(10px)',
  opacity: 0.9,
  zIndex: 1,
})

const wave = keyframes({
  '0%': { opacity: 0, transform: 'translateY(10px) scale(0.9)' },
  '35%': { opacity: 0.8, transform: 'translateY(0) scale(1)' },
  '70%': { opacity: 0.25, transform: 'translateY(-6px) scale(0.96)' },
  '100%': { opacity: 0, transform: 'translateY(-10px) scale(0.92)' },
})

export const pixelGrid = style({
  position: 'absolute',
  inset: 0,
  pointerEvents: 'none',
  zIndex: 1,
  display: 'grid',
  gridTemplateColumns: 'repeat(18, 1fr)',
  gridTemplateRows: 'repeat(6, 1fr)',
  gap: '6px',
  padding: '18px',
  opacity: 0.9,
  transition: 'opacity 500ms ease',
})

export const pixel = style({
  borderRadius: '6px',
  background:
    'linear-gradient(135deg, rgba(133,10,255,0.65), rgba(255,133,10,0.6), rgba(10,255,133,0.6))',
  animationName: wave,
  animationDuration: '2.6s',
  animationTimingFunction: 'ease-in-out',
  animationIterationCount: 'infinite',
  animationFillMode: 'forwards',
  opacity: 0,
})

export const pixelGridHidden = style({
  opacity: 0,
})

export const heroImage = style({
  borderRadius: vars.radii.lg,
  boxShadow: vars.shadow.md,
  border: `1px solid ${vars.color.border}`,
})

export const mutedText = style({
  color: vars.color.textMuted,
})

export const badges = style({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '12px',
})

export const split = style({
  display: 'grid',
  gap: '24px',
  gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
})

export const highlight = style({
  backgroundColor: vars.color.surface,
  borderRadius: vars.radii.md,
  border: `1px solid ${vars.color.border}`,
  padding: '16px',
})

export const list = style({
  display: 'grid',
  gap: '12px',
})

export const chip = style({
  display: 'inline-flex',
  alignItems: 'center',
  gap: '6px',
  padding: '6px 12px',
  borderRadius: '999px',
  border: `1px solid ${vars.color.border}`,
  backgroundColor: vars.color.background,
  fontSize: '12px',
})

export const mapBox = style({
  borderRadius: vars.radii.lg,
  border: `1px solid ${vars.color.border}`,
  backgroundColor: vars.color.surface,
  padding: '20px',
})

export const infoSection = style({
  padding: `${vars.layout.sectionSpacing} 0`,
})

export const infoGrid = style({
  display: 'grid',
  gap: '24px',
  alignItems: 'center',
  gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
})

export const infoMedia = style({
  width: '100%',
  aspectRatio: '4 / 3',
  borderRadius: vars.radii.lg,
  overflow: 'hidden',
  border: `1px solid ${vars.color.border}`,
  backgroundColor: vars.color.surface,
  boxShadow: vars.shadow.sm,
})

export const infoImage = style({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
})

export const infoText = style({
  display: 'grid',
  gap: '12px',
})

export const infoTyping = style({
  fontSize: 'clamp(16px, 1.6vw, 22px)',
  color: vars.color.textMuted,
})

export const infoCenter = style({
  height: '100vh',
  display: 'grid',
  placeItems: 'center',
  textAlign: 'center',
  gap: '3px',
})

export const infoPin = style({
  position: 'relative',
  height: '200vh',
})

export const infoSticky = style({
  position: 'sticky',
  top: 0,
})

export const infoWord = style({
  fontSize: 'clamp(48px, 20vw, 140px)',
  fontFamily: vars.typography.heading,
  letterSpacing: '0.03em',
  fontWeight: 900,
  lineHeight: 0.3,
  display: 'inline-block',
  paddingBlock: '0.24em',
  color: 'rgba(255,255,255,0.16)',
  backgroundImage: 'linear-gradient(180deg, #850AFF, #850AFF)',
  backgroundRepeat: 'no-repeat',
  backgroundSize: '100% var(--fill, 0%)',
  WebkitBackgroundClip: 'text',
  backgroundClip: 'text',
})

export const infoWordFill = style({
  backgroundSize: '100% var(--fill-word, 0%)',
})

export const infoDesc = style({
  fontSize: 'clamp(20px, 3vw, 28px)',
  fontWeight: 900,
  color: vars.color.textMuted,
  maxWidth: '640px',
  margin: '0 auto',
  opacity: 'var(--desc, 0.35)',
})

export const infoDescSmall = style({
  fontSize: 'clamp(20px, 1.6vw, 20px)',
  marginTop: '-85px',
  fontWeight: 500,
  color: vars.color.textMuted,
  opacity: 'var(--desc, 0.35)',
})
