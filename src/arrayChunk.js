// chunk an array by the size provided

export const arrayChunk = (array, size) => {
  const chunked = []
  const backupArray = [...array]
  const numArrays = Math.ceil(array.length / size)
  for (let i = 0; i < numArrays; i++) {
    const slicedArray = backupArray.splice(0, size)
    chunked.push(slicedArray)
  }
  return chunked
}
