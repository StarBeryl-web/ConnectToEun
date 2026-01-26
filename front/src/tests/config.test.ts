import { describe, expect, it } from 'vitest'
import { siteConfig } from '../config/loadSiteConfig'

describe('site config', () => {
  it('has required brand fields', () => {
    expect(siteConfig.brand.name).toBeTruthy()
    expect(siteConfig.brand.tagline).toBeTruthy()
  })

  it('has service and portfolio data', () => {
    expect(siteConfig.data.services.length).toBeGreaterThan(0)
    expect(siteConfig.data.portfolio.length).toBeGreaterThan(0)
  })
})
