// Write an algorithm to return the maximum difference between
// two values in an array if the index of the larger value
// is greater than the index of the smaller value, or -1 if
// the array has one item or is in non-ascending order.

export const maxDiff = arr => {
  if (arr.length < 2) return -1
  const copiedArray = [...arr]
  arr.sort((a, b) => a - b)
  const [first] = arr
  const last = arr[arr.length - 1]
  const firstIndex = copiedArray.findIndex(val => val === first)
  const lastIndex = copiedArray.findIndex(val => val === last)
  if (firstIndex > lastIndex) return -1
  return last - first
}
