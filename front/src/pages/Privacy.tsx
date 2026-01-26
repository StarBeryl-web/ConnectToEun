import { SEO } from '../components/SEO'
import { Container } from '../components/Container'
import { Section } from '../components/Section'
import { siteConfig } from '../config/loadSiteConfig'
import { list } from '../sections/sections.css'

export const PrivacyPage = () => {
  return (
    <>
      <SEO pageKey="privacy" />
      <Section>
        <Container>
          <h1>{siteConfig.privacy.title}</h1>
          <p>최종 업데이트: {siteConfig.privacy.updatedAt}</p>
          <div className={list}>
            {siteConfig.privacy.body.map((item) => (
              <p key={item}>{item}</p>
            ))}
          </div>
        </Container>
      </Section>
    </>
  )
}
