import { useEffect } from 'react'
import { siteConfig } from '../config/loadSiteConfig'

const loadScriptOnce = (src: string, id: string) => {
  if (document.getElementById(id)) return
  const script = document.createElement('script')
  script.id = id
  script.async = true
  script.src = src
  document.head.appendChild(script)
}

export const Integrations = () => {
  useEffect(() => {
    const env = import.meta.env as Record<string, string | undefined>
    const gaId = env[siteConfig.integrations.gaIdEnv]
    const gtmId = env[siteConfig.integrations.gtmIdEnv]
    const channelTalkKey = env[siteConfig.integrations.channelTalkEnv]

    if (gaId) {
      loadScriptOnce(`https://www.googletagmanager.com/gtag/js?id=${gaId}`, 'ga-script')
      if (!window.dataLayer) {
        window.dataLayer = []
      }
      const gtag = (...args: unknown[]) => {
        window.dataLayer.push(args)
      }
      gtag('js', new Date())
      gtag('config', gaId)
    }

    if (gtmId) {
      loadScriptOnce(`https://www.googletagmanager.com/gtm.js?id=${gtmId}`, 'gtm-script')
    }

    if (channelTalkKey) {
      const w = window as Window
      if (!w.ChannelIO) {
        w.ChannelIO = ((...args: unknown[]) => {
          w.ChannelIO!.q = w.ChannelIO!.q || []
          w.ChannelIO!.q!.push(args)
        }) as Window['ChannelIO']
      }
      loadScriptOnce('https://cdn.channel.io/plugin/ch-plugin-web.js', 'ch-plugin')
      w.ChannelIO?.('boot', { pluginKey: channelTalkKey })
    }
  }, [])

  return null
}

declare global {
  interface Window {
    dataLayer: unknown[]
    ChannelIO?: ((...args: unknown[]) => void) & { q?: unknown[][] }
  }
}
