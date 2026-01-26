import { vars } from '../styles/theme.css'
import type { SiteConfig } from '../config/types'

const setVar = (name: string, value: string) => {
  document.documentElement.style.setProperty(name, value)
}

export const applyTheme = (theme: SiteConfig['theme']) => {
  const entries: Array<[string, string]> = [
    ['--color-brand', theme.colors.brand],
    ['--color-brandStrong', theme.colors.brandStrong],
    ['--color-accent', theme.colors.accent],
    ['--color-text', theme.colors.text],
    ['--color-textMuted', theme.colors.textMuted],
    ['--color-background', theme.colors.background],
    ['--color-surface', theme.colors.surface],
    ['--color-border', theme.colors.border],
    ['--typography-body', theme.typography.body],
    ['--typography-heading', theme.typography.heading],
    ['--radii-sm', theme.radii.sm],
    ['--radii-md', theme.radii.md],
    ['--radii-lg', theme.radii.lg],
    ['--shadow-sm', theme.shadow.sm],
    ['--shadow-md', theme.shadow.md],
    ['--layout-maxWidth', theme.layout.maxWidth],
    ['--layout-gutter', theme.layout.gutter],
    ['--layout-sectionSpacing', theme.layout.sectionSpacing],
  ]

  entries.forEach(([name, value]) => setVar(name, value))

  void vars
}
