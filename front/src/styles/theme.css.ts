import { createGlobalTheme } from '@vanilla-extract/css'

export const vars = createGlobalTheme(':root', {
  color: {
    brand: '#850AFF',
    brandStrong: '#0b2f4f',
    accent: '#FF850A',
    text: '#FF850A',
    textMuted: '#30393f',
    background: '#0AFF85',
    surface: '#ffffff',
    border: '#e6e0d9',
  },
  typography: {
    body: '"Space Grotesk", "Helvetica Neue", Arial, sans-serif',
    heading: '"Space Grotesk", "Helvetica Neue", Arial, sans-serif',
  },
  radii: {
    sm: '8px',
    md: '14px',
    lg: '22px',
  },
  shadow: {
    sm: '0 6px 18px rgba(15, 28, 48, 0.08)',
    md: '0 16px 30px rgba(15, 28, 48, 0.12)',
  },
  layout: {
    maxWidth: '1120px',
    gutter: 'clamp(16px, 4vw, 36px)',
    sectionSpacing: 'clamp(48px, 8vw, 120px)',
  },
})
