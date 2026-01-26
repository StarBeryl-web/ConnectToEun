export function deepMerge<T>(base: T, override: Partial<T>): T {
  if (override === undefined || override === null) {
    return base
  }

  if (Array.isArray(base) || Array.isArray(override)) {
    return (override as T) ?? base
  }

  if (typeof base !== 'object' || typeof override !== 'object') {
    return (override as T) ?? base
  }

  const result: Record<string, unknown> = { ...(base as Record<string, unknown>) }

  Object.entries(override as Record<string, unknown>).forEach(([key, value]) => {
    const baseValue = (base as Record<string, unknown>)[key]
    if (value === undefined) {
      return
    }
    if (
      value &&
      typeof value === 'object' &&
      !Array.isArray(value) &&
      baseValue &&
      typeof baseValue === 'object' &&
      !Array.isArray(baseValue)
    ) {
      result[key] = deepMerge(baseValue as object, value as object)
      return
    }
    result[key] = value
  })

  return result as T
}
