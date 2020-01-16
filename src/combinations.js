// Return an array of all the combinations of the letters in the given array

const swap = (arr, i, j) => {
  const temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}

export const combinations = arr => {
  const counter = [...arr].fill(0)
  const anagrams = [arr.join('')] // start with the first one

  let idx = 0
  while (idx < arr.length) {
    if (counter[idx] < idx) {
      swap(arr, idx % 2 === 1 ? counter[idx] : 0, idx)
      counter[idx]++
      idx = 0
      anagrams.push(arr.join(''))
    } else {
      counter[idx] = 0
      idx++
    }
  }

  return anagrams.sort()
}
