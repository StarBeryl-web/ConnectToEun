import { siteConfig } from '../../config/loadSiteConfig'

export const PrivacyConsent = () => {
  return (
    <div>
      <strong>개인정보 처리 안내</strong>
      <p>문의 접수 시 {siteConfig.privacy.title}에 동의해야 합니다.</p>
    </div>
  )
}
