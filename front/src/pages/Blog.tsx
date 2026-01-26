import { SEO } from '../components/SEO'
import { Container } from '../components/Container'
import { Section } from '../components/Section'
import { siteConfig } from '../config/loadSiteConfig'
import { card, gridTwo, pill } from '../components/ui.css'
import { sectionEyebrow, sectionTitle } from '../styles/layout.css'

export const BlogPage = () => {
  return (
    <>
      <SEO pageKey="blog" />
      <Section>
        <Container>
          <p className={sectionEyebrow}>Tech Blog</p>
          <h2 className={sectionTitle}>기술 블로그</h2>
          <div className={gridTwo}>
            {siteConfig.data.blogPosts.map((post) => (
              <a key={post.id} href={post.href} className={card}>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  {post.tags?.map((tag) => (
                    <span key={tag} className={pill}>
                      {tag}
                    </span>
                  ))}
                </div>
                <h3>{post.title}</h3>
                <p>{post.summary}</p>
                <small>{post.date}</small>
              </a>
            ))}
          </div>
        </Container>
      </Section>
    </>
  )
}
