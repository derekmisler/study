import { maxDiff } from '~maxDiff'

describe('maxDiff', () => {
  let result
  let array
  beforeEach(() => {
    result = maxDiff(array)
  })
  describe('5 - 1', () => {
    beforeAll(() => {
      array = [1, 2, 3, 4, 5]
    })
    test('should return 4', () => {
      expect(result).toEqual(4)
    })
  })
  describe('10 - 1', () => {
    beforeAll(() => {
      array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    })
    test('should return 9', () => {
      expect(result).toEqual(9)
    })
  })
  describe('0', () => {
    beforeAll(() => {
      array = [0]
    })
    test('should return -1', () => {
      expect(result).toEqual(-1)
    })
  })
  describe('out of order', () => {
    beforeAll(() => {
      array = [10, 9, 3, 21]
    })
    test('should return -1', () => {
      expect(result).toEqual(-1)
    })
  })
})
