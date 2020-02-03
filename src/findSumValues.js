// I have an array of unique integers. If I give you a number, I want you to return 2 elements from that array that sum up to the number I give you. For example, return 2 elements from the array [1,2,3,5,4] that sum up to 7 -- it should return {2,5}.

export const findSumValues = (arr, num) => {
  const values = []
  arr.sort((a, b) => a - b)
  let i = 0
  while (i < arr.length) {
    const diff = num - arr[i]
    if (arr.includes(diff)) {
      values.push(arr[i], diff)
      i = arr.length
      break
    }
    i++
  }
  return values
}
