// Where given two JSON objects, write a function that will find the
// diffs between the two (updates, deletions, insertions)

export const formatDiff = (a, b, c) => (
  { property: a, before: b, after: c }
)

const compare = (a, b, reverse) => {
  if (!a || typeof a !== 'object') return a
  if (!b || typeof b !== 'object') return b

  const diff = []
  Object.keys(a).forEach(key => {
    if (typeof a[key] === 'object' && !Array.isArray(a[key])) {
      diff.push(...compare(a[key], b[key]))
      diff.push(...compare(b[key], a[key], true))
    } else {
      if (a[key] !== b[key]) {
        const property = key.toString()
        const before = reverse ? b[key] : a[key]
        const after = reverse ? a[key]: b[key]
        diff.push(formatDiff(property, before, after))
      }
    }
  })
  return diff
}

export const jsonDiff = (a, b) => {
  const diffs = [...compare(a, b), ...compare(b, a, true)]
  return diffs.filter((diff, i, self) => (
    i === self.findIndex(d => d.property === diff.property)
  ))
}
