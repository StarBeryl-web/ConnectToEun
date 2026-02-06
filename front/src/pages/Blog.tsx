import { useMemo, useRef, useState } from 'react'
import { SEO } from '../components/SEO'
import { Container } from '../components/Container'
import { Section } from '../components/Section'
import { siteConfig } from '../config/loadSiteConfig'
import { card, gridTwo, pill } from '../components/ui.css'
import { sectionEyebrow, sectionTitle } from '../styles/layout.css'
import { CustomSelect } from '../components/CustomSelect'
import {
  blogCard,
  blogMeta,
  blogSearch,
  blogSearchButton,
  blogSearchRow,
  blogSelect,
  blogSummary,
  blogTag,
  blogTagFilter,
  blogTagFilterActive,
  blogTagsRow,
  blogTitle,
  blogToolbar,
} from '../sections/blog/blogList.css'

export const BlogPage = () => {
  const [query, setQuery] = useState('')
  const [selectedTag, setSelectedTag] = useState('all')
  const [sort, setSort] = useState('latest')
  const posts = siteConfig.data.blogPosts
  const searchRef = useRef<HTMLInputElement | null>(null)

  const tags = ['Design', 'Cost', 'Launch', 'Development', 'Product']

  const filteredPosts = useMemo(() => {
    const lowerQuery = query.trim().toLowerCase()
    const filtered = posts.filter((post) => {
      const matchTag = selectedTag === 'all' || post.tags?.includes(selectedTag)
      const matchText =
        lowerQuery.length === 0 ||
        post.title.toLowerCase().includes(lowerQuery) ||
        post.summary.toLowerCase().includes(lowerQuery)
      return matchTag && matchText
    })

    if (sort === 'title') {
      return [...filtered].sort((a, b) => a.title.localeCompare(b.title))
    }
    if (sort === 'oldest') {
      return [...filtered].sort((a, b) => Date.parse(a.date) - Date.parse(b.date))
    }
    return [...filtered].sort((a, b) => Date.parse(b.date) - Date.parse(a.date))
  }, [posts, query, selectedTag, sort])

  return (
    <>
      <SEO pageKey="blog" />
      <Section>
        <Container>
          <p className={sectionEyebrow}>Tech Blog</p>
          <h2 className={sectionTitle}>기술 블로그</h2>
          <div className={blogToolbar}>
            <div className={blogSearchRow}>
              <input
                ref={searchRef}
                className={blogSearch}
                type="search"
                placeholder="제목으로 검색"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                aria-label="블로그 제목 검색"
              />
              <button
                type="button"
                className={blogSearchButton}
                onClick={() => searchRef.current?.blur()}
                aria-label="검색"
              >
                검색
              </button>
            </div>
            <div className={blogTagsRow}>
              <button
                type="button"
                className={`${blogTagFilter} ${selectedTag === 'all' ? blogTagFilterActive : ''}`}
                onClick={() => setSelectedTag('all')}
              >
                ALL
              </button>
              {tags.map((tag) => (
                <button
                  key={tag}
                  type="button"
                  className={`${blogTagFilter} ${selectedTag === tag ? blogTagFilterActive : ''}`}
                  onClick={() => setSelectedTag(tag)}
                >
                  {tag}
                </button>
              ))}
            </div>
            <div className={blogSelect}>
              <CustomSelect
                ariaLabel="정렬 기준"
                value={sort}
                onChange={setSort}
                options={[
                  { label: '최신순', value: 'latest' },
                  { label: '오래된순', value: 'oldest' },
                  { label: '제목순', value: 'title' },
                ]}
              />
            </div>
          </div>
          <div className={gridTwo}>
            {filteredPosts.map((post) => (
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
