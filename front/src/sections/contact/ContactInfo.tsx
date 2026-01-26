import { siteConfig } from '../../config/loadSiteConfig'
import { card } from '../../components/ui.css'

export const ContactInfo = () => {
  return (
    <div className={card}>
      <h3>연락처</h3>
      <p>{siteConfig.contact.address}</p>
      <p>{siteConfig.contact.phone}</p>
      <p>{siteConfig.contact.email}</p>
    </div>
  )
}
