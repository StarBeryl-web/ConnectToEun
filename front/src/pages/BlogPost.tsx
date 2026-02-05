import { useMemo } from 'react'
import { useParams } from 'react-router-dom'
import { SEO } from '../components/SEO'
import { Container } from '../components/Container'
import { Section } from '../components/Section'
import { siteConfig } from '../config/loadSiteConfig'
import { primaryButton } from '../components/ui.css'
import {
  heading,
  postBody,
  postList,
  postMeta,
  postMetaRow,
  postSummary,
  postTag,
  postTags,
  postTable,
  postTableCell,
  postTableCellNoWrap,
  postTableHead,
  postTableHeadNoWrap,
  postTableHeadRow,
  postTitle,
  postTableRow,
  postTableWrap,
  postHeader,
} from '../sections/blog/blogPost.css'

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
          <div className={postHeader}>
            <h1 className={postTitle}>{post.title}</h1>
            <p className={postSummary}>{post.summary}</p>
            <div className={postMetaRow}>
              <p className={postMeta}>{post.date}</p>
              {post.tags?.length ? (
                <div className={postTags}>
                  {post.tags.map((tag) => (
                    <span key={tag} className={postTag}>
                      {tag}
                    </span>
                  ))}
                </div>
              ) : null}
            </div>
          </div>
          {post.content ? (
            <article className={postBody}>{renderMarkdown(post.content)}</article>
          ) : (
            <p>이 게시글의 본문이 아직 등록되지 않았습니다.</p>
          )}
          <a className={primaryButton} href="#/blog">
            목록으로
          </a>
        </Container>
      </Section>
    </>
  )
}

const renderMarkdown = (content: string) => {
  const lines = content.split('\n')
  const blocks: JSX.Element[] = []
  let paragraph: string[] = []
  let list: string[] = []

  const renderInline = (text: string) => {
    const parts = text.split(/(\*\*.+?\*\*)/g).filter(Boolean)
    return parts.map((part, index) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={`b-${index}`}>{part.slice(2, -2)}</strong>
      }
      return <span key={`t-${index}`}>{part}</span>
    })
  }

  const flushParagraph = () => {
    if (paragraph.length === 0) return
    blocks.push(<p key={`p-${blocks.length}`}>{renderInline(paragraph.join(' '))}</p>)
    paragraph = []
  }

  const flushList = () => {
    if (list.length === 0) return
    const items = list.map((item) => <li key={item}>{renderInline(item)}</li>)
    blocks.push(
      <ul className={postList} key={`ul-${blocks.length}`}>
        {items}
      </ul>,
    )
    list = []
  }

  const isTableDivider = (line: string) => {
    const trimmed = line.trim()
    if (!trimmed.startsWith('|') || !trimmed.endsWith('|')) return false
    return trimmed
      .slice(1, -1)
      .split('|')
      .every((cell) => cell.trim().replace(/-/g, '').length === 0)
  }

  const parseTableRow = (line: string) =>
    line
      .trim()
      .slice(1, -1)
      .split('|')
      .map((cell) => cell.trim())

  let i = 0
  while (i < lines.length) {
    const line = lines[i]
    const trimmed = line.trim()

    if (trimmed.startsWith('|') && trimmed.endsWith('|') && lines[i + 1] && isTableDivider(lines[i + 1])) {
      flushParagraph()
      flushList()
      const header = parseTableRow(line)
      i += 2
      const rows: string[][] = []
      while (i < lines.length && lines[i].trim().startsWith('|') && lines[i].trim().endsWith('|')) {
        rows.push(parseTableRow(lines[i]))
        i += 1
      }

      blocks.push(
        <div className={postTableWrap} key={`table-${blocks.length}`}>
          <table className={postTable}>
            <thead>
              <tr className={postTableHeadRow}>
                {header.map((cell, cellIndex) => {
                  const isLast = cellIndex === header.length - 1
                  return (
                    <th key={cell} className={isLast ? postTableHeadNoWrap : postTableHead}>
                      {renderInline(cell)}
                    </th>
                  )
                })}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, rowIndex) => (
                <tr key={`row-${rowIndex}`} className={postTableRow}>
                  {row.map((cell, cellIndex) => {
                    const isLast = cellIndex === row.length - 1
                    return (
                      <td
                        key={`${rowIndex}-${cellIndex}`}
                        className={isLast ? postTableCellNoWrap : postTableCell}
                      >
                        {renderInline(cell)}
                      </td>
                    )
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>,
      )
      continue
    }

    if (!trimmed) {
      flushParagraph()
      flushList()
      i += 1
      continue
    }

    if (trimmed.startsWith('### ')) {
      flushParagraph()
      flushList()
      const text = trimmed.replace('### ', '')
      blocks.push(
        <h4 className={heading} key={`h4-${blocks.length}`}>
          {renderInline(text)}
        </h4>,
      )
      i += 1
      continue
    }

    if (trimmed.startsWith('## ')) {
      flushParagraph()
      flushList()
      const text = trimmed.replace('## ', '')
      blocks.push(
        <h3 className={heading} key={`h3-${blocks.length}`}>
          {renderInline(text)}
        </h3>,
      )
      i += 1
      continue
    }

    if (trimmed.startsWith('# ')) {
      flushParagraph()
      flushList()
      const text = trimmed.replace('# ', '')
      blocks.push(
        <h2 className={heading} key={`h2-${blocks.length}`}>
          {renderInline(text)}
        </h2>,
      )
      i += 1
      continue
    }

    if (trimmed.startsWith('- ')) {
      list.push(trimmed.replace('- ', ''))
      i += 1
      continue
    }

    paragraph.push(trimmed)
    i += 1
  }

  flushParagraph()
  flushList()
  return blocks
}
