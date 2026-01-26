import { useMemo } from 'react'
import { useParams } from 'react-router-dom'
import { SEO } from '../components/SEO'
import { Container } from '../components/Container'
import { Section } from '../components/Section'
import { siteConfig } from '../config/loadSiteConfig'
import { primaryButton } from '../components/ui.css'

export const BlogPostPage = () => {
  const { slug } = useParams()
  const post = useMemo(
    () => siteConfig.data.blogPosts.find((item) => item.id === slug),
    [slug],
  )

  if (!post) {
    return (
      <Section>
        <Container>
          <h1>게시글을 찾을 수 없습니다.</h1>
          <a className={primaryButton} href="#/blog">
            블로그로 돌아가기
          </a>
        </Container>
      </Section>
    )
  }

  return (
    <>
      <SEO pageKey="blog" />
      <Section>
        <Container>
          <p>{post.date}</p>
          <h1>{post.title}</h1>
          <p>{post.summary}</p>
          <p>
            이 영역에 실제 기술 블로그 본문을 추가하세요. (CMS나 Markdown 연동 전까지
            placeholder)
          </p>
          <a className={primaryButton} href="#/blog">
            목록으로
          </a>
        </Container>
      </Section>
    </>
  )
}
