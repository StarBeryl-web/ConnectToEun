import { siteConfig } from '../../config/loadSiteConfig'
import { Container } from '../../components/Container'
import { Section } from '../../components/Section'
import { list } from '../sections.css'
import { sectionEyebrow, sectionTitle } from '../../styles/layout.css'

export const FAQ = () => {
  return (
    <Section>
      <Container>
        <p className={sectionEyebrow}>FAQ</p>
        <h2 className={sectionTitle}>자주 묻는 질문</h2>
        <div className={list}>
          {siteConfig.data.faqs.map((faq) => (
            <div key={faq.question}>
              <strong>{faq.question}</strong>
              <p>{faq.answer}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  )
}
