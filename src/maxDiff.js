// Write an algorithm to return the maximum difference between
// two values in an array if the index of the larger value
// is greater than the index of the smaller value, or -1 if
// the array has one item or is in non-ascending order.

export const maxDiff = arr => {
  if (arr.length < 2) return -1
  for (let i = 1; i <= arr.length - 1; i++) {
    if (arr[i] <= arr[i - 1]) return -1
  }
  return arr[arr.length - 1] - arr[0]
}
