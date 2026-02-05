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
  color: '#E6E6F1',
})

export const blogMeta = style({
  color: '#e6e6f174',
  fontSize: '13px',
})

export const blogTag = style({
  color: '#E6E6F1',
  backgroundColor: vars.color.brand,
})

export const blogToolbar = style({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '12px',
  alignItems: 'center',
  margin: '18px 0 24px',
})

export const blogSearch = style({
  minWidth: '240px',
  flex: '1 1 280px',
  height: '44px',
})

export const blogSelect = style({
  minWidth: '160px',
  flex: '0 0 200px',
})

export const blogTagsRow = style({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '8px',
  alignItems: 'center',
})

export const blogTagFilter = style({
  borderRadius: '999px',
  padding: '6px 12px',
  border: `1px solid ${vars.color.brand}`,
  backgroundColor: 'transparent',
  color: '#E6E6F1',
  fontSize: '12px',
  cursor: 'pointer',
  height: '36px',
  display: 'inline-flex',
  alignItems: 'center',
})

export const blogTagFilterActive = style({
  backgroundColor: vars.color.brand,
  color: '#ffffff',
})
