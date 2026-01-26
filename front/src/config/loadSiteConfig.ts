import { presetMap } from './presets'
import { deepMerge } from './merge'
import { siteOverrides, sitePreset } from '../site.config'
import type { SiteConfig } from './types'

const presetKey =
  (import.meta.env.VITE_SITE_PRESET as string | undefined) || sitePreset || 'default'

const basePreset = presetMap[presetKey] ?? presetMap.default

export const siteConfig: SiteConfig = deepMerge(basePreset, siteOverrides)
