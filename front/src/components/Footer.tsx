import { siteConfig } from '../config/loadSiteConfig'
import { Container } from './Container'
import { footerInner, footerList, footerMeta, footerTitle, footerWrap } from './footer.css'

type Props = {
  onOpenPrivacy: () => void
}

export const Footer = ({ onOpenPrivacy }: Props) => {
  return (
    <footer className={footerWrap}>
      <Container>
        <div className={footerInner}>
          <div>
            <div className={footerTitle}>CONNECT 2 EUN</div>
            <div className={footerList}>
              <span>{siteConfig.contact.address}</span>
              <span>{siteConfig.contact.businessInfo}</span>
              <span>{siteConfig.contact.email}</span>
            </div>
          </div>
          <div>
            <div className={footerTitle}>바로가기</div>
            <div className={footerList}>
              {siteConfig.navigation.footer.map((item) =>
                item.href === '#privacy' ? (
                  <button key={item.label} type="button" onClick={onOpenPrivacy}>
                    {item.label}
                  </button>
                ) : (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.external ? '_blank' : undefined}
                    rel={item.external ? 'noreferrer' : undefined}
                  >
                    {item.label}
                  </a>
                ),
              )}
            </div>
          </div>
          <div>
            <div className={footerTitle}>연락처</div>
            <div className={footerList}>
              <a href={`tel:${siteConfig.contact.phone}`}>{siteConfig.contact.phone}</a>
              <a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a>
              {siteConfig.contact.socials.instagram ? (
                <a href={siteConfig.contact.socials.instagram} target="_blank" rel="noreferrer">
                  Instagram
                </a>
              ) : null}
              {siteConfig.contact.socials.linkedin ? (
                <a href={siteConfig.contact.socials.linkedin} target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
              ) : null}
              {siteConfig.contact.socials.blog ? (
                <a href={siteConfig.contact.socials.blog} target="_blank" rel="noreferrer">
                  Blog
                </a>
              ) : null}
            </div>
          </div>
        </div>
        <div className={footerMeta}>© {new Date().getFullYear()} {siteConfig.brand.name}</div>
      </Container>
    </footer>
  )
}
