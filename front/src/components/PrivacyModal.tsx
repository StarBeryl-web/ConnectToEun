import { modal, modalBody, modalClose, modalHeader, overlay } from './modal.css'
import { siteConfig } from '../config/loadSiteConfig'

type Props = {
  open: boolean
  onClose: () => void
}

export const PrivacyModal = ({ open, onClose }: Props) => {
  if (!open) return null

  return (
    <div className={overlay} role="dialog" aria-modal="true">
      <div className={modal}>
        <div className={modalHeader}>
          <strong>{siteConfig.privacy.title}</strong>
          <button className={modalClose} onClick={onClose} aria-label="닫기">
            ×
          </button>
        </div>
        <div className={modalBody}>
          <span>최종 업데이트: {siteConfig.privacy.updatedAt}</span>
          {siteConfig.privacy.body.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
      </div>
    </div>
  )
}
