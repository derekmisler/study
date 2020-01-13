import { multiplyLetters, divideLetters } from '~multiplyLetters'

describe('multiplyLetters', () => {
  let result
  let string
  beforeEach(() => {
    result = multiplyLetters(string)
  })
  describe('8xk', () => {
    beforeAll(() => {
      string = 'p14a8xkpq'
    })
    test('should add 8 "k"s', () => {
      expect(result).toEqual('p14akkkkkkkkpq')
    })
  })
  describe('3xf, 4xy', () => {
    beforeAll(() => {
      string = 'as3xf4xy'
    })
    test('should add 8 "k"s', () => {
      expect(result).toEqual('asfffyyyy')
    })
  })
})
describe('multiplyLetters', () => {
  let result
  let string
  let letter
  beforeEach(() => {
    result = divideLetters(string, letter)
  })
  describe('asfffyyyyy', () => {
    beforeAll(() => {
      string = 'asfffyyyyy'
      letter = 'y'
    })
    test('should turn the y\'s into length-x-y', () => {
      expect(result).toEqual('asfff5xy')
    })
  })
})
