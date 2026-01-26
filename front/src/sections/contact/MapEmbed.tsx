import { useEffect, useRef } from 'react'
import { siteConfig } from '../../config/loadSiteConfig'
import { card } from '../../components/ui.css'

const loadScriptOnce = (src: string, id: string) => {
  if (document.getElementById(id)) return
  const script = document.createElement('script')
  script.id = id
  script.async = true
  script.src = src
  document.head.appendChild(script)
}

export const MapEmbed = () => {
  const mapRef = useRef<HTMLDivElement | null>(null)
  const env = import.meta.env as Record<string, string | undefined>
  const kakaoKey = env[siteConfig.integrations.kakaoMapEnv]

  useEffect(() => {
    if (!kakaoKey || !mapRef.current) return

    const scriptId = 'kakao-map-script'
    loadScriptOnce(`https://dapi.kakao.com/v2/maps/sdk.js?appkey=${kakaoKey}&autoload=false`, scriptId)

    const onLoad = () => {
      if (!window.kakao?.maps || !mapRef.current) return
      window.kakao.maps.load(() => {
        const { lat, lng, level, showMarker } = siteConfig.contact.map
        const map = new window.kakao.maps.Map(mapRef.current!, {
          center: new window.kakao.maps.LatLng(lat, lng),
          level,
        })
        if (showMarker) {
          new window.kakao.maps.Marker({
            map,
            position: new window.kakao.maps.LatLng(lat, lng),
          })
        }
      })
    }

    const script = document.getElementById(scriptId)
    if (window.kakao?.maps) {
      onLoad()
      return
    }
    if (script) {
      script.addEventListener('load', onLoad, { once: true })
    }
  }, [kakaoKey])

  if (!kakaoKey) {
    return (
      <div className={card}>
        <h3>지도</h3>
        <p>카카오 지도 키가 설정되지 않았습니다.</p>
      </div>
    )
  }

  return (
    <div className={card}>
      <h3>지도</h3>
      <div ref={mapRef} style={{ height: '280px', borderRadius: '12px' }} />
    </div>
  )
}

declare global {
  interface Window {
    kakao?: {
      maps: {
        load: (callback: () => void) => void
        Map: new (container: HTMLElement, options: { center: unknown; level: number }) => unknown
        LatLng: new (lat: number, lng: number) => unknown
        Marker: new (options: { map: unknown; position: unknown }) => unknown
      }
    }
  }
}
