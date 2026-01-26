import { siteConfig } from '../../config/loadSiteConfig'
import { Container } from '../../components/Container'
import { Section } from '../../components/Section'
import { mapBox } from '../sections.css'

export const MapTeaser = () => {
  return (
    <Section>
      <Container>
        <div className={mapBox}>
          <h3>오시는 길</h3>
          <p>{siteConfig.contact.address}</p>
          <p>문의: {siteConfig.contact.phone}</p>
        </div>
      </Container>
    </Section>
  )
}
