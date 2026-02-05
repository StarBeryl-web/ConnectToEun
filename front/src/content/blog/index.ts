import type { BlogPost } from '../../config/types'

type Frontmatter = {
  id?: string
  title?: string
  summary?: string
  date?: string
  tags?: string | string[]
}

const stripQuotes = (value: string) => {
  const trimmed = value.trim()
  if (
    (trimmed.startsWith('"') && trimmed.endsWith('"')) ||
    (trimmed.startsWith("'") && trimmed.endsWith("'"))
  ) {
    return trimmed.slice(1, -1)
  }
  return trimmed
}

const parseTags = (value?: string | string[]) => {
  if (!value) return undefined
  if (Array.isArray(value)) return value
  const trimmed = value.trim()
  if (trimmed.startsWith('[') && trimmed.endsWith(']')) {
    const inner = trimmed.slice(1, -1)
    return inner
      .split(',')
      .map((item) => item.trim())
      .filter(Boolean)
  }
  return trimmed
    .split(',')
    .map((item) => item.trim())
    .filter(Boolean)
}

const parseFrontmatter = (raw: string) => {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n?/)
  if (!match) {
    return { meta: {} as Frontmatter, body: raw.trim() }
  }

  const metaLines = match[1].split('\n')
  const meta: Frontmatter = {}

  metaLines.forEach((line) => {
    const separatorIndex = line.indexOf(':')
    if (separatorIndex === -1) return
    const key = line.slice(0, separatorIndex).trim()
    const rawValue = line.slice(separatorIndex + 1)
    const value = stripQuotes(rawValue)
    if (!key) return
    if (key === 'tags') {
      meta.tags = value
      return
    }
    meta[key as keyof Frontmatter] = value as never
  })

  const body = raw.slice(match[0].length).trim()
  return { meta, body }
}

const mdModules = import.meta.glob<string>('./*.md', {
  eager: true,
  query: '?raw',
  import: 'default',
})

export const loadBlogPosts = (): BlogPost[] => {
  const posts = Object.entries(mdModules).map(([path, raw]) => {
    const fileName = path.split('/').pop()?.replace('.md', '') ?? 'post'
    const { meta, body } = parseFrontmatter(String(raw))
    const id = meta.id ?? fileName
    const title = meta.title ?? id
    const summary = meta.summary ?? ''
    const date = meta.date ?? ''
    const tags = parseTags(meta.tags)

    return {
      id,
      title,
      summary,
      date,
      tags,
      href: `#/blog/${id}`,
      content: body,
    }
  })

  return posts.sort((a, b) => {
    const left = Date.parse(a.date)
    const right = Date.parse(b.date)
    if (Number.isNaN(left) || Number.isNaN(right)) {
      return a.title.localeCompare(b.title)
    }
    return right - left
  })
}
