import { Container } from '../components/Container'
import { Section } from '../components/Section'
import { primaryButton } from '../components/ui.css'

export const NotFoundPage = () => {
  return (
    <Section>
      <Container>
        <h1>페이지를 찾을 수 없습니다.</h1>
        <p>요청한 페이지가 존재하지 않습니다.</p>
        <a className={primaryButton} href="#/">
          홈으로 이동
        </a>
      </Container>
    </Section>
  )
}
