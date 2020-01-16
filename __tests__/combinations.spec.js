import { combinations } from '~combinations'

describe('combinations', () => {
  let result
  let arr
  beforeEach(() => {
    result = combinations(arr)
  })
  describe('three letters', () => {
    beforeAll(() => {
      arr = ['a', 'b', 'c']
    })
    test('should return all combinations', () => {
      expect(result).toEqual([
        'abc',
        'acb',
        'bca',
        'bac',
        'cab',
        'cba'
      ].sort())
    })
  })
  describe('four letters', () => {
    beforeAll(() => {
      arr = ['a', 'b', 'c', 'd']
    })
    test('should return all combinations', () => {
      expect(result).toEqual([
        'abcd',
        'abdc',
        'acbd',
        'acdb',
        'adbc',
        'adcb',
        'bacd',
        'badc',
        'bcad',
        'bdac',
        'bcda',
        'bdca',
        'cabd',
        'cadb',
        'cbad',
        'cdab',
        'cbda',
        'cdba',
        'dabc',
        'dacb',
        'dbac',
        'dcba',
        'dbca',
        'dcab',
      ].sort())
    })
  })
})

