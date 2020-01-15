import { arrayDupes } from '~arrayDupes'

describe('arrayDupes', () => {
  let result
  let arr = []
  beforeEach(() => {
    result = arrayDupes(arr)
  })
  describe('when duplicates are 1, 2, 3', () => {
    beforeAll(() => {
      arr = [1, 2, 3, 1, 2, 3, 4, 5, 6, 7, 8]
    })
    test('should return [1, 2, 3]', () => {
      expect(result).toEqual([1, 2, 3])
    })
  })
})
