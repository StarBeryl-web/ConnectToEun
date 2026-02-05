const assetProtocolPattern = /^(https?:|data:|blob:)/i

export const withBase = (path?: string) => {
  if (!path) return ''
  if (assetProtocolPattern.test(path)) return path
  const base = import.meta.env.BASE_URL || '/'
  const normalized = path.startsWith('/') ? path.slice(1) : path
  return `${base}${normalized}`
}
