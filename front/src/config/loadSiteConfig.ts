import { presetMap } from './presets'
import { deepMerge } from './merge'
import { siteOverrides, sitePreset } from '../site.config'
import { loadBlogPosts } from '../content/blog'
import type { SiteConfig } from './types'

const presetKey =
  (import.meta.env.VITE_SITE_PRESET as string | undefined) || sitePreset || 'default'

const basePreset = presetMap[presetKey] ?? presetMap.default
const mergedConfig: SiteConfig = deepMerge(basePreset, siteOverrides)

export const siteConfig: SiteConfig = {
  ...mergedConfig,
  data: {
    ...mergedConfig.data,
    blogPosts: loadBlogPosts(),
  },
}
