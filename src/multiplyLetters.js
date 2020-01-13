// find the "x", multiple the letter immediately after, by the number immediately before

export const multiplyLetters = string => {
  const letters = string.split('')
  const newLetters = letters.map((l, i) => {
    if (l === 'x' && i <= letters.length - 1) {
      const multiplier = letters[i - 1] - 1
      const multipliedLetters = new Array(multiplier).fill(letters[i + 1])
      return multipliedLetters.join('')
    }
    if (letters[i + 1] !== 'x') return l
  })
  return newLetters.join('')
}

export const divideLetters = (string, letter) => {
  const dict = {}
  string.split('').forEach(l => {
    dict[l] = dict[l] ? dict[l] + 1 : 1
  })
  const letterCount = dict[letter]
  const repeatingLetter = new Array(letterCount).fill(letter)
  const stringToReplace = repeatingLetter.join('')
  return string.replace(stringToReplace, `${letterCount}x${letter}`)
}
