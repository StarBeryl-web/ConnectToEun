import { style } from '@vanilla-extract/css'
import { vars } from '../../styles/theme.css'

export const postMeta = style({
  color: '#E6E6F1',
  fontSize: '14px',
})

export const postBody = style({
  display: 'grid',
  gap: '14px',
  fontSize: '15px',
  lineHeight: 1.7,
  color: '#E6E6F1',
})

export const postList = style({
  display: 'grid',
  gap: '6px',
  margin: 0,
  paddingLeft: '18px',
  color: '#E6E6F1',
})

export const heading = style({
  color: '#E6E6F1',
  marginTop: '8px',
})

export const postSummary = style({
  color: '#E6E6F1',
})

export const postHeader = style({
  display: 'grid',
  gap: '12px',
  marginBottom: '22px',
  padding: '18px 20px',
  borderRadius: vars.radii.lg,
  backgroundColor: 'rgba(255,255,255,0.08)',
})

export const postTitle = style({
  color: 'inherit',
  fontSize: 'clamp(28px, 4vw, 44px)',
  lineHeight: 1.2,
})

export const postMetaRow = style({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '10px',
  alignItems: 'center',
})

export const postTags = style({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '8px',
})

export const postTag = style({
  padding: '6px 12px',
  borderRadius: '999px',
  border: `1px solid ${vars.color.border}`,
  color: '#E6E6F1',
  fontSize: '12px',
})

export const postTable = style({
  width: '100%',
  minWidth: '760px',
  borderCollapse: 'collapse',
  fontSize: '14px',
  border: `1px solid ${vars.color.border}`,
})

export const postTableCell = style({
  border: `1px solid ${vars.color.border}`,
  padding: '10px 12px',
  textAlign: 'center',
  verticalAlign: 'middle',
})

export const postTableHead = style([
  postTableCell,
  {
    fontWeight: 700,
    backgroundColor: 'rgba(255,255,255,0.08)',
  },
])

export const postTableRow = style({
  borderBottom: `1px solid ${vars.color.border}`,
})

export const postTableHeadRow = style({
  borderBottom: `1px solid ${vars.color.border}`,
})

export const postTableCellNoWrap = style({
  whiteSpace: 'nowrap',
  minWidth: '90px',
  textAlign: 'center',
  verticalAlign: 'middle',
})

export const postTableHeadNoWrap = style([
  postTableCellNoWrap,
  {
    fontWeight: 700,
    backgroundColor: 'rgba(255,255,255,0.08)',
  },
])

export const postTableWrap = style({
  overflowX: 'auto',
  border: `1px solid ${vars.color.border}`,
  borderRadius: vars.radii.md,
  WebkitOverflowScrolling: 'touch',
})
