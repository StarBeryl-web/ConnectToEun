import { style } from '@vanilla-extract/css'
import { vars } from '../../styles/theme.css'

export const blogCard = style({
  color: '#111111',
  display: 'grid',
  gap: '12px',
})

export const blogTitle = style({
  color: vars.color.brand,
  margin: 0,
})

export const blogSummary = style({
  color: '#242427',
})

export const blogMeta = style({
  color: '#111111',
  fontSize: '13px',
})

export const blogTag = style({
  color: '#E6E6F1',
  backgroundColor: vars.color.brand,
})
