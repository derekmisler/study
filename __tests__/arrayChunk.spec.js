import { arrayChunk } from '~arrayChunk'

describe('arrayChunk', () => {
  let result
  let array
  let size
  beforeEach(() => {
    result = arrayChunk(array, size)
  })
  describe('3', () => {
    beforeAll(() => {
      array = [1, 2, 3, 4, 5, 6, 7, 8]
      size= 3
    })
    test('should create arrays of length "3" inside the other array', () => {
      expect(result).toEqual([
        [1, 2, 3],
        [4, 5, 6],
        [7, 8]
      ])
    })
  })
})
