// Find dupes in an array

export const arrayDupes = a => {
  const count = a.reduce((acc, item) => {
    acc[item] = (acc[item] || 0) + 1
    return acc
  }, {})
  return Object.keys(count)
    .filter(key => Number(count[key]) > 1)
    .map(val => Number(val))
}
