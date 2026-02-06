import { globalStyle } from '@vanilla-extract/css'
import { vars } from './theme.css'

globalStyle('*, *::before, *::after', {
  boxSizing: 'border-box',
})

globalStyle('body', {
  margin: 0,
  minHeight: '100vh',
  fontFamily: vars.typography.body,
  color: vars.color.text,
  backgroundColor: vars.color.background,
  backgroundImage: 'none',
  lineHeight: 1.6,
})

globalStyle('img', {
  maxWidth: '100%',
  display: 'block',
})

globalStyle('a', {
  color: 'inherit',
  textDecoration: 'none',
})

globalStyle('button', {
  font: 'inherit',
  cursor: 'pointer',
  border: 'none',
  background: 'none',
  padding: 0,
})

globalStyle('h1, h2, h3, h4, h5, h6', {
  fontFamily: vars.typography.heading,
  letterSpacing: '-0.02em',
  margin: 0,
})

globalStyle('p', {
  margin: 0,
})

globalStyle('label', {
  display: 'grid',
  gap: '6px',
  fontSize: '14px',
})

globalStyle('form', {
  display: 'grid',
  gap: '12px',
})

globalStyle('input, textarea', {
  padding: '10px 12px',
  borderRadius: '10px',
  border: `1px solid ${vars.color.border}`,
  fontFamily: vars.typography.body,
})

globalStyle('input[type=\"checkbox\"]', {
  width: '16px',
  height: '16px',
})

globalStyle('ul', {
  paddingLeft: '18px',
  margin: 0,
  display: 'grid',
  gap: '6px',
})

globalStyle('a:focus-visible, button:focus-visible, input:focus-visible, textarea:focus-visible', {
  outline: `2px solid ${vars.color.accent}`,
  outlineOffset: '2px',
})

globalStyle('::selection', {
  backgroundColor: vars.color.brand,
  color: '#ffffff',
})
