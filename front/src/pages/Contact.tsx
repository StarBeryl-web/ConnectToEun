import { SEO } from '../components/SEO'
import { Container } from '../components/Container'
import { Section } from '../components/Section'
import { ContactForm } from '../sections/contact/ContactForm'
import { ContactInfo } from '../sections/contact/ContactInfo'
import { PrivacyConsent } from '../sections/contact/PrivacyConsent'
import { gridTwo } from '../components/ui.css'

export const ContactPage = () => {
  return (
    <>
      <SEO pageKey="contact" />
      <Section id="contact">
        <Container>
          <div className={gridTwo}>
            <ContactForm />
            <div style={{ display: 'grid', gap: '16px' }}>
              <ContactInfo />
              <PrivacyConsent />
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}
