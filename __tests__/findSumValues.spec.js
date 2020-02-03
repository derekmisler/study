import { findSumValues } from '~findSumValues'

describe('findSumValues', () => {
  let result
  let array
  let num
  beforeEach(() => {
    result = findSumValues(array, num)
  })
  describe('5', () => {
    beforeAll(() => {
      array = [1, 2, 3, 4, 5]
      num = 5
    })
    test('should return [1, 4]', () => {
      expect(result).toEqual([1, 4])
    })
  })
  describe('7', () => {
    beforeAll(() => {
      array = [1, 2, 3, 5, 4]
      num = 7
    })
    test('should return [2, 5]', () => {
      expect(result).toEqual([2, 5])
    })
  })
})
