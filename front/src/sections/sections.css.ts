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
  borderRadius: '150px',
  minHeight: 'clamp(150px, 90svh, 200px)',
  border: `1px solid ${vars.color.border}`,
  padding: 'clamp(28px, 5vw, 56px)',
  background:
    'linear-gradient(120deg, rgba(133,10,255,0.16), rgba(255,133,10,0.12) 40%, rgba(10,255,133,0.12) 80%), linear-gradient(180deg, rgba(8,12,24,0.72), rgba(8,12,24,0.92))',
  boxShadow: vars.shadow.md,
})

export const heroShell = style({
  position: 'relative',
  paddingTop: '18px',
  paddingBottom: '64px',
})

export const heroGrid = style({
  display: 'grid',
  gap: '28px',
  alignItems: 'center',
  alignContent: 'center',
  paddingTop: '80px',
  gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
  position: 'relative',
  zIndex: 2,
  minHeight: '100%',
})

export const heroCopy = style({
  color: 'rgba(255,255,255,0.92)',
  display: 'grid',
  gap: '14px',
  textAlign: 'center',
  justifyItems: 'center',
})

export const heroTitle = style({
  fontSize: 'clamp(30px, 6vw, 70px)',
  lineHeight: 1.05,
  letterSpacing: '-0.02em',
})

export const heroBody = style({
  fontSize: 'clamp(18px, 2vw, 70px)',
  lineHeight: 1.6,
  whiteSpace: 'pre-line',
})

export const heroMuted = style({
  color: 'rgba(255, 255, 255, 0.9)',
})

export const heroTagline = style({
  fontSize: 'clamp(20px, 2.5vw, 50px)',
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

const scrollWheel = keyframes({
  '0%': { transform: 'translateY(0)', opacity: 0.9 },
  '70%': { transform: 'translateY(10px)', opacity: 0.2 },
  '100%': { transform: 'translateY(12px)', opacity: 0 },
})

const scrollArrow = keyframes({
  '0%': { transform: 'translateY(0)', opacity: 0.4 },
  '60%': { transform: 'translateY(6px)', opacity: 1 },
  '100%': { transform: 'translateY(10px)', opacity: 0 },
})

export const heroScroll = style({
  position: 'absolute',
  left: '50%',
  bottom: '-60px',
  transform: 'translateX(-50%)',
  zIndex: 10,
  display: 'grid',
  gap: '8px',
  placeItems: 'center',
  color: 'rgba(255, 255, 255, 0.75)',
  fontSize: '11px',
  letterSpacing: '0.2em',
  textTransform: 'uppercase',
  pointerEvents: 'none',
})

export const heroScrollMouse = style({
  width: '26px',
  height: '40px',
  borderRadius: '999px',
  border: '1px solid rgba(255, 255, 255, 0.5)',
  display: 'grid',
  justifyItems: 'center',
  paddingTop: '6px',
  backgroundColor: 'rgba(8, 12, 24, 0.25)',
  backdropFilter: 'blur(4px)',
})

export const heroScrollWheel = style({
  width: '4px',
  height: '8px',
  borderRadius: '999px',
  backgroundColor: 'rgba(255, 255, 255, 0.8)',
  animation: `${scrollWheel} 1.6s ease-in-out infinite`,
})

export const heroScrollArrow = style({
  width: '8px',
  height: '8px',
  borderRight: '1px solid rgba(255, 255, 255, 0.7)',
  borderBottom: '1px solid rgba(255, 255, 255, 0.7)',
  transform: 'rotate(45deg)',
  animation: `${scrollArrow} 1.6s ease-in-out infinite`,
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
    'linear-gradient(135deg, #8564fb, #FB8564, #64FB85)',
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

// information

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
  backgroundImage: 'linear-gradient(180deg, #8564fb, #4d1cff)',
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
  color: 'rgba(255,255,255,0.2)',
  maxWidth: '640px',
  margin: '0 auto',
  opacity: 'var(--desc, 0.35)',
  backgroundImage: 'linear-gradient(180deg, #ffffff, #ffffff)',
  backgroundRepeat: 'no-repeat',
  backgroundSize: '100% var(--desc-fill, 0%)',
  WebkitBackgroundClip: 'text',
  backgroundClip: 'text',
})

export const infoDescSmall = style({
  fontSize: 'clamp(20px, 1.6vw, 20px)',
  marginTop: '-85px',
  fontWeight: 500,
  color: 'rgba(255,255,255,0.2)',
  opacity: 'var(--desc, 0.35)',
  backgroundImage: 'linear-gradient(180deg, #ffffff, #ffffff)',
  backgroundRepeat: 'no-repeat',
  backgroundSize: '100% var(--desc-fill, 0%)',
  WebkitBackgroundClip: 'text',
  backgroundClip: 'text',
})

export const infoDescLine = style({
  display: 'block',
  backgroundImage: 'linear-gradient(180deg, #ffffff, #ffffff)',
  backgroundRepeat: 'no-repeat',
  backgroundSize: '100% var(--line-fill, 0%)',
  WebkitBackgroundClip: 'text',
  backgroundClip: 'text',
})

// ServicesPreview 

export const servicesShowcase = style({
  borderRadius: vars.radii.lg,
  border: '1px solid rgba(255,255,255,0.08)',
  padding: 'clamp(24px, 4vw, 40px)',
  background:
    'linear-gradient(180deg, rgba(16,18,26,0.75), rgba(16,18,26,0.9)), radial-gradient(60% 80% at 10% 0%, rgba(34,39,52,0.5), transparent 70%)',
  color: '#f8fafc',
  boxShadow: '0 18px 40px rgba(0,0,0,0.25)',
})

export const servicesGrid = style({
  display: 'grid',
  gap: '24px',
  gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
})

export const serviceCard = style({
  position: 'relative',
  padding: '24px',
  borderRadius: '28px',
  backgroundColor: 'rgba(255,255,255,0.06)',
  border: '1px solid rgba(255,255,255,0.12)',
  overflow: 'hidden',
  display: 'grid',
  gap: '12px',
})

export const serviceGlow = style({
  position: 'absolute',
  inset: 0,
  background:
    'linear-gradient(120deg, rgba(255,255,255,0.08), rgba(255,255,255,0.0) 55%)',
  opacity: 0.9,
  pointerEvents: 'none',
})

export const serviceLine = style({
  width: '2px',
  height: '100%',
  backgroundColor: 'rgba(235, 225, 225, 0.5)',
})

export const serviceMeta = style({
  fontSize: '14px',
  letterSpacing: '0.08em',
  textTransform: 'uppercase',
  color: 'rgba(255,255,255,0.7)',
})

export const serviceTitle = style({
  fontSize: 'clamp(20px, 2.2vw, 26px)',
  fontWeight: 600,
  lineHeight: 1.3,
})

export const serviceBody = style({
  fontSize: '15px',
  lineHeight: 1.8,
  color: 'rgba(255,255,255,0.78)',
})

export const servicesPin = style({
  position: 'relative',
  height: '300vh',
})

export const servicesSticky = style({
  position: 'sticky',
  top: 0,
  minHeight: '100vh',
  display: 'grid',
  alignItems: 'center',
  '@media': {
    '(max-width: 400px)': {
      position: 'relative',
    },
  },
})

export const servicesLayout = style({
  display: 'grid',
  gap: '32px',
  alignItems: 'center',
  gridTemplateColumns: 'minmax(0, 1fr) minmax(220px, 360px)',
  overflow: 'hidden',
  '@media': {
    '(max-width: 720px)': {
      gridTemplateColumns: 'minmax(0, 1fr) minmax(180px, 240px)',
      gap: '20px',
    },
    '(max-width: 400px)': {
      gridTemplateColumns: 'minmax(0, 1fr)',
    },
  },
})

export const servicesMobileList = style({
  display: 'grid',
  gap: '48px',
})

export const servicesItemLayout = style({
  display: 'grid',
  gap: '24px',
  alignItems: 'center',
  gridTemplateColumns: 'minmax(0, 1fr) minmax(220px, 360px)',
  '@media': {
    '(max-width: 720px)': {
      gridTemplateColumns: 'minmax(0, 1fr) minmax(180px, 240px)',
      gap: '18px',
    },
    '(max-width: 650px)': {
      gridTemplateColumns: 'minmax(0, 1fr)',
    },
  },
})

export const servicesAccent = style({
  width: '3px',
  height: '100%',
  backgroundColor: vars.color.brand,
  borderRadius: '999px',
})

export const servicesEyebrow = style({
  fontSize: 'clamp(12px, 1.2vw, 14px)',
  letterSpacing: '0.18em',
  textTransform: 'uppercase',
  color: vars.color.textMuted,
})

export const servicesTitle = style({
  fontSize: 'clamp(22px, 2.6vw, 40px)',
  fontWeight: 700,
  lineHeight: 1.2,
})

export const servicesBody = style({
  fontSize: 'clamp(14px, 1.4vw, 20px)',
  color: vars.color.textMuted,
  lineHeight: 1.8,
})

export const servicesCard = style({
  display: 'grid',
  gap: '12px',
  transition: 'opacity 300ms ease, transform 300ms ease',
})

export const servicesRow = style({
  display: 'grid',
  gridTemplateColumns: 'auto 1fr',
  gap: '16px',
  alignItems: 'stretch',
  position: 'relative',
  zIndex: 1,
})

export const servicesNumber = style({
  width: '44px',
  height: '44px',
  borderRadius: '999px',
  display: 'grid',
  placeItems: 'center',
  fontSize: 'clamp(16px, 1.6vw, 18px)',
  fontWeight: 700,
  color: '#000000',
  background:
    'linear-gradient(135deg, #8564fb, #64FB85)',
})

export const servicesNumberStack = style({
  display: 'grid',
  gridTemplateRows: 'auto 1fr',
  justifyItems: 'center',
  gap: '12px',
})

export const servicesLine = style({
  width: '2px',
  height: '100%',
  backgroundColor: '#8564fb',
  borderRadius: '999px',
})

export const servicesMetaRow = style({
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
})

export const servicesCardHidden = style({
  opacity: 0,
  transform: 'translateY(16px)',
  pointerEvents: 'none',
})

export const servicesCardActive = style({
  opacity: 1,
  transform: 'translateY(0)',
})

export const servicesVisual = style({
  width: '100%',
  marginLeft: 'auto',
  display: 'grid',
  placeItems: 'center',
  '@media': {
    '(max-width: 720px)': {
      position: 'absolute',
      inset: 0,
      zIndex: 0,
      pointerEvents: 'none',
    },
  },
})

export const servicesVisualBox = style({
  width: '100%',
  aspectRatio: '4 / 3',
  borderRadius: vars.radii.lg,
  overflow: 'hidden',
  backgroundColor: 'rgba(0,0,0,0.2)',
  '@media': {
    '(max-width: 720px)': {
      aspectRatio: 'auto',
      width: '100%',
      height: '100%',
      borderRadius: '0px',
      backgroundColor: 'rgba(0,0,0,0)',
    },
  },
})

export const servicesVisualImage = style({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  overflow: 'hidden',
  transition: 'opacity 300ms ease, filter 300ms ease',
  '@media': {
    '(max-width: 720px)': {
      opacity: 0,
      filter: 'blur(6px)',
    },
  },
})
