// Return an array of all the combinations of the letters in the given array

const swap = (chars, i, j) => {
  const tmp = chars[i]
  chars[i] = chars[j]
  chars[j] = tmp
}

export const combinations = chars => {
  const counter = [...chars].fill(0)
  const anagrams = []
  const length = chars.length
  let i = 0

  anagrams.push(chars.join(''));
  while (i < length) {
    if (counter[i] < i) {
      swap(chars, i % 2 === 1 ? counter[i] : 0, i)
      counter[i]++
      i = 0
      anagrams.push(chars.join(''))
    } else {
      counter[i] = 0
      i++
    }
  }

  return anagrams.sort()
}
