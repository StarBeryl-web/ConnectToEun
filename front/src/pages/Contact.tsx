import { SEO } from '../components/SEO'
import { Container } from '../components/Container'
import { Section } from '../components/Section'
import { EstimateQuote } from '../components/EstimateQuote'
import { gridTwo } from '../components/ui.css'

export const ContactPage = () => {
  return (
    <>
      <SEO pageKey="contact" />
      <Section id="contact">
        <Container>
          <div className={gridTwo}>
            <EstimateQuote />
          </div>
        </Container>
      </Section>
    </>
  )
}
