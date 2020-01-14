import { roman } from '~roman'

describe('roman', () => {
  let result
  let num
  beforeEach(() => {
    result = roman(num)
  })
  describe('621', () => {
    beforeAll(() => {
      num = 621
    })
    test('should convert to roman numeral', () => {
      expect(result).toEqual('DCXXI')
    })
  })
  describe('10', () => {
    beforeAll(() => {
      num = 10
    })
    test('should convert to roman numeral', () => {
      expect(result).toEqual('X')
    })
  })
  describe('4', () => {
    beforeAll(() => {
      num = 4
    })
    test('should convert to roman numeral', () => {
      expect(result).toEqual('IV')
    })
  })
})
