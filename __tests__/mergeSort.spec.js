import { merge, mergeSort } from '~mergeSort'

describe('merge', () => {
  let result
  let arr1
  let arr2
  beforeEach(() => {
    result = merge(arr1, arr2)
  })
  describe('merged arrays', () => {
    beforeAll(() => {
      arr1 = [1, 3, 5]
      arr2 = [2, 4]
    })
    test('should return one array', () => {
      expect(result).toEqual([1, 2, 3, 4, 5])
    })
  })
})

describe('mergeSort', () => {
  let result
  let arr
  beforeEach(() => {
    result = mergeSort(arr)
  })
  describe('sort', () => {
    beforeAll(() => {
      arr = [3, 5, 2, 4, 1]
    })
    test('should return sorted array', () => {
      expect(result).toEqual([1, 2, 3, 4, 5])
    })
  })
})
