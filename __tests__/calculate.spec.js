import { calculate } from '~calculate'

describe('calculate', () => {
  let result
  let obj
  beforeEach(() => {
    result = calculate(obj)
  })
  describe('addition', () => {
    beforeAll(() => {
      obj = { '+': [1, 2, 3] }
    })
    test('should return 6', () => {
      expect(result).toEqual(6)
    })
  })
  describe('nested', () => {
    beforeAll(() => {
      obj = { '+': [1, 2, { '-': [1, 2] }] }
    })
    test('should return 2', () => {
      expect(result).toEqual(2)
    })
  })
  describe('deeply nested', () => {
    beforeAll(() => {
      obj = { '+': [1, 2, { '-': [1, { '+': [5, 5] }] }] }
    })
    test('should return -6', () => {
      expect(result).toEqual(-6)
    })
  })
})
