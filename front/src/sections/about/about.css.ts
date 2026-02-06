import { keyframes, style } from '@vanilla-extract/css'
import { vars } from '../../styles/theme.css'

const fadeUp = keyframes({
  '0%': { opacity: 0, transform: 'translateY(14px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
})

export const fadeInUp = style({
  opacity: 0,
  transform: 'translateY(14px)',
  animation: `${fadeUp} 700ms ease forwards`,
  animationDelay: 'var(--delay, 0ms)',
  '@media': {
    '(prefers-reduced-motion: reduce)': {
      animation: 'none',
      opacity: 1,
      transform: 'none',
    },
  },
})

// Hero Section Styles

export const heroSection = style({
  position: 'relative',
  overflow: 'hidden',
  paddingTop: 0,
  paddingBottom: 0,
})

export const heroBackdrop = style({
  position: 'absolute',
  inset: 0,
  opacity: 0.9,
  pointerEvents: 'none',
})

export const heroGrid = style({
  position: 'relative',
  zIndex: 1,
  display: 'grid',
  gap: '40px',
  alignItems: 'center',
  gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
})

export const heroCopy = style({
  display: 'grid',
  gap: '18px',
})

export const heroTitle = style({
  fontSize: 'clamp(32px, 5vw, 72px)',
  letterSpacing: '-0.02em',
  lineHeight: 1.05,
})

export const heroLead = style({
  fontSize: 'clamp(16px, 2vw, 22px)',
  color: vars.color.textMuted,
  lineHeight: 1.7,
  whiteSpace: 'pre-line',
})

export const heroActions = style({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '12px',
  marginTop: '12px',
})

export const heroHighlights = style({
  display: 'grid',
  gap: '16px',
})

export const heroHighlightCard = style({
  background: vars.color.surface,
  borderRadius: vars.radii.lg,
  border: `1px solid ${vars.color.border}`,
  padding: '18px 20px',
  boxShadow: vars.shadow.sm,
  fontSize: '15px',
  lineHeight: 1.6,
})

export const heroStickyWrap = style({
  position: 'relative',
  height: '400vh',
})

export const heroStickyContainer = style({
  position: 'relative',
  height: '100%',
  width: '100%',
})

export const heroStage = style({
  width: '100vw',
  height: 'calc(100svh - var(--header-offset, 0px))',
  position: 'fixed',
  top: 'var(--header-offset, 0px)',
  left: 0,
  right: 0,
  display: 'grid',
  placeItems: 'center',
  overflow: 'hidden',
  zIndex: 2,
  padding: 'var(--hero-padding, 0px)',
  boxSizing: 'border-box',
  '@media': {
    '(max-width: 900px)': {
      height: '100svh',
    },
  },
})

export const heroStageReleased = style({
  position: 'absolute',
  top: 'auto',
  bottom: 0,
})

export const heroFrame = style({
  width: '100%',
  height: '100%',
  position: 'relative',
  borderRadius: 'var(--hero-radius, 0px)',
  overflow: 'hidden',
  border: `1px solid rgba(230, 224, 217, 0.18)`,
  // boxShadow: 'var(--hero-shadow, 0 30px 60px rgba(8, 12, 24, 0.5))',
  backgroundColor: 'rgba(20, 20, 24, 0.6)',
  transform: 'scale(var(--hero-scale, 1))',
  transformOrigin: 'top center',
  transition: 'transform 120ms ease-out, border-radius 180ms ease-out, box-shadow 180ms ease-out',
  '@media': {
    '(prefers-reduced-motion: reduce)': {
      transition: 'none',
    },
  },
})

export const heroImage = style({
  position: 'absolute',
  inset: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  transform: 'scale(1.02)',
  filter: 'grayscale(var(--hero-gray, 0)) brightness(var(--hero-brightness, 1))',
  transition: 'filter 140ms ease-out',
})

export const heroScrim = style({
  position: 'absolute',
  inset: 0,
  background:
    'linear-gradient(180deg, rgba(8, 12, 24, 0.15) 0%, rgba(8, 12, 24, 0.6) 100%)',
})

export const heroCenter = style({
  position: 'absolute',
  inset: 0,
  display: 'grid',
  placeItems: 'center',
  padding: 'clamp(24px, 4vw, 48px)',
  textAlign: 'center',
  color: 'white',
})

export const heroTitleWrap = style({
  display: 'grid',
  gap: '18px',
  placeItems: 'center',
  maxWidth: '720px',
})

export const heroIcon = style({
  width: '56px',
  height: '56px',
  borderRadius: '999px',
  border: '2px solid rgba(255, 255, 255, 0.8)',
  display: 'grid',
  placeItems: 'center',
  fontSize: '26px',
})

export const heroHeadline = style({
  fontSize: 'clamp(40px, 7vw, 80px)',
  lineHeight: 1.05,
  letterSpacing: '-0.02em',
  whiteSpace: 'pre-line',
  textShadow: '0 14px 40px rgba(0, 0, 0, 0.35)',
  opacity: 'var(--hero-headline, 1)',
  transition: 'opacity 160ms ease-out',
})

export const heroIntro = style({
  position: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%, -50%)',
  maxWidth: '860px',
  width: 'min(90%, 860px)',
  color: 'rgba(255, 255, 255, 0.9)',
  fontSize: 'clamp(10px, 5.1vw, 36px)',
  lineHeight: 1.7,
  textAlign: 'center',
  opacity: 'var(--hero-intro, 0)',
  transition: 'opacity 160ms ease-out',
  whiteSpace: 'pre-line',
})

// About Section Styles

export const sectionShell = style({
  position: 'relative',
})

export const sectionAlt = style({
  background:
    'linear-gradient(180deg, rgba(64, 64, 69, 0.6), rgba(36, 36, 39, 0.8))',
  borderTop: `1px solid rgba(230, 224, 217, 0.08)`,
  borderBottom: `1px solid rgba(230, 224, 217, 0.08)`,
})

export const sectionIntro = style({
  display: 'grid',
  gap: '12px',
  maxWidth: '720px',
  marginBottom: '32px',
})

export const sectionTitle = style({
  fontSize: 'clamp(26px, 3.2vw, 44px)',
  lineHeight: 1.2,
})

export const sectionLead = style({
  color: vars.color.textMuted,
  fontSize: 'clamp(15px, 1.6vw, 18px)',
  lineHeight: 1.7,
})

export const featureGrid = style({
  display: 'grid',
  gap: '24px',
  gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
})

export const featureCard = style({
  backgroundColor: vars.color.surface,
  borderRadius: vars.radii.lg,
  border: `1px solid rgba(230, 224, 217, 0.18)`,
  padding: '22px',
  display: 'grid',
  gap: '16px',
  boxShadow: vars.shadow.sm,
})

export const featureTag = style({
  display: 'inline-flex',
  alignItems: 'center',
  gap: '8px',
  fontSize: '12px',
  letterSpacing: '0.08em',
  textTransform: 'uppercase',
  color: vars.color.textMuted,
})

export const featureList = style({
  display: 'grid',
  gap: '10px',
  color: vars.color.textMuted,
  paddingLeft: '16px',
})

export const resourceGrid = style({
  display: 'grid',
  gap: '24px',
  gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
})

export const resourceCard = style({
  backgroundColor: vars.color.surface,
  borderRadius: vars.radii.lg,
  border: `1px solid rgba(230, 224, 217, 0.18)`,
  overflow: 'hidden',
  display: 'grid',
  gridTemplateRows: '160px auto',
  boxShadow: vars.shadow.sm,
})

export const resourceMedia = style({
  width: '100%',
  height: '100%',
  background: 'rgba(133, 100, 251, 0.12)',
  display: 'grid',
  placeItems: 'center',
})

export const resourceImage = style({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
})

export const resourceBody = style({
  padding: '18px 20px 20px',
  display: 'grid',
  gap: '10px',
})

export const resourceTags = style({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '8px',
})

export const resourceTag = style({
  borderRadius: '999px',
  padding: '4px 10px',
  border: `1px solid rgba(230, 224, 217, 0.2)`,
  fontSize: '11px',
  textTransform: 'uppercase',
  letterSpacing: '0.08em',
  color: vars.color.textMuted,
})

export const storyGrid = style({
  display: 'grid',
  gap: '24px',
  gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
})

export const storyCard = style({
  backgroundColor: vars.color.surface,
  borderRadius: vars.radii.lg,
  border: `1px solid rgba(230, 224, 217, 0.18)`,
  padding: '22px',
  display: 'grid',
  gap: '16px',
  boxShadow: vars.shadow.sm,
})

export const storyQuote = style({
  fontSize: '16px',
  lineHeight: 1.7,
})

export const storyMeta = style({
  color: vars.color.textMuted,
  fontSize: '13px',
})

export const newsList = style({
  display: 'grid',
  gap: '16px',
})

export const newsItem = style({
  display: 'grid',
  gap: '6px',
  padding: '16px 18px',
  borderRadius: vars.radii.md,
  border: `1px solid rgba(230, 224, 217, 0.2)`,
  backgroundColor: vars.color.surface,
})

export const newsYear = style({
  fontSize: '12px',
  textTransform: 'uppercase',
  letterSpacing: '0.12em',
  color: vars.color.textMuted,
})

export const valuesGrid = style({
  display: 'grid',
  gap: '20px',
  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
  '@media': {
    '(max-width: 900px)': {
      display: 'flex',
      overflowX: 'auto',
      paddingBottom: '12px',
      scrollSnapType: 'x mandatory',
      WebkitOverflowScrolling: 'touch',
    },
  },
})

export const valueCard = style({
  borderRadius: vars.radii.lg,
  padding: '20px',
  backgroundColor: vars.color.surface,
  border: `1px solid rgba(230, 224, 217, 0.22)`,
  minHeight: '500px',
  display: 'grid',
  gridTemplateRows: 'auto 1fr',
  gap: '16px',
  boxShadow: vars.shadow.sm,
  scrollSnapAlign: 'start',
  position: 'relative',
  overflow: 'hidden',
  '@media': {
    '(max-width: 900px)': {
      minWidth: 'min(320px, 78vw)',
    },
  },
})

export const valueLabel = style({
  fontSize: 'clamp(18px, 2.2vw, 24px)',
  fontWeight: 700,
})

export const valueDescription = style({
  color: vars.color.textMuted,
  fontSize: '14px',
  lineHeight: 1.6,
})

export const valueContent = style({
  position: 'relative',
  zIndex: 1,
  display: 'grid',
  gap: '8px',
})

export const valueMedia = style({
  position: 'absolute',
  inset: 0,
})

export const valueImage = style({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
})

export const ctaSection = style({
  paddingTop: 'clamp(64px, 10vw, 120px)',
  paddingBottom: 'clamp(64px, 10vw, 120px)',
})

export const ctaCard = style({
  background:
    'linear-gradient(120deg, rgba(133, 100, 251, 0.22), rgba(10, 255, 133, 0.12))',
  borderRadius: vars.radii.lg,
  border: `1px solid rgba(230, 224, 217, 0.2)`,
  padding: '28px',
  display: 'grid',
  gap: '12px',
})
