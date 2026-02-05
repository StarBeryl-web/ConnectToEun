import { SEO } from '../components/SEO'
import { Container } from '../components/Container'
import { Section } from '../components/Section'
import { siteConfig } from '../config/loadSiteConfig'
import { card, gridTwo, pill } from '../components/ui.css'
import { sectionEyebrow, sectionTitle } from '../styles/layout.css'
import { blogCard, blogMeta, blogSummary, blogTag, blogTitle } from '../sections/blog/blogList.css'

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
              <a key={post.id} href={post.href} className={`${card} ${blogCard}`}>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  {post.tags?.map((tag) => (
                    <span key={tag} className={`${pill} ${blogTag}`}>
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className={blogTitle}>{post.title}</h3>
                <p className={blogSummary}>{post.summary}</p>
                <small className={blogMeta}>{post.date}</small>
              </a>
            ))}
          </div>
        </Container>
      </Section>
    </>
  )
}
