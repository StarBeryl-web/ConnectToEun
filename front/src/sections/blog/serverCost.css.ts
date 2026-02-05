import { style } from '@vanilla-extract/css'
import { vars } from '../../styles/theme.css'

export const summaryWrapper = style({
  display: 'grid',
  gap: '24px',
})

export const introText = style({
  color: vars.color.textMuted,
  fontSize: '15px',
  marginTop: '-6px',
})

export const noticeList = style({
  display: 'grid',
  gap: '10px',
  padding: '16px',
  border: `1px solid ${vars.color.border}`,
  borderRadius: vars.radii.md,
  backgroundColor: vars.color.surface,
  boxShadow: vars.shadow.sm,
})

export const cardsGrid = style({
  display: 'grid',
  gap: '16px',
  gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
})

export const costCard = style({
  border: `1px solid ${vars.color.border}`,
  borderRadius: vars.radii.lg,
  backgroundColor: vars.color.surface,
  boxShadow: vars.shadow.sm,
  padding: '18px',
  display: 'grid',
  gap: '12px',
})

export const cardTitle = style({
  margin: 0,
  fontSize: '18px',
  color: vars.color.brandStrong,
})

export const cardMeta = style({
  margin: 0,
  fontSize: '14px',
  color: vars.color.textMuted,
})

export const cardHighlight = style({
  fontSize: '20px',
  fontWeight: 700,
  color: vars.color.brand,
})

export const bulletList = style({
  display: 'grid',
  gap: '6px',
  margin: 0,
  paddingLeft: '16px',
  fontSize: '14px',
})

export const tableWrap = style({
  overflowX: 'auto',
  border: `1px solid ${vars.color.border}`,
  borderRadius: vars.radii.md,
  backgroundColor: vars.color.surface,
})

export const costTable = style({
  width: '100%',
  minWidth: '720px',
  borderCollapse: 'collapse',
  fontSize: '14px',
})

export const tableCell = style({
  borderBottom: `1px solid ${vars.color.border}`,
  padding: '12px 14px',
  textAlign: 'left',
  verticalAlign: 'top',
})

export const tableHead = style([
  tableCell,
  {
    backgroundColor: vars.color.background,
    color: vars.color.text,
    fontWeight: 600,
  },
])

export const sectionBlock = style({
  display: 'grid',
  gap: '12px',
})

export const noteText = style({
  fontSize: '13px',
  color: vars.color.textMuted,
})
