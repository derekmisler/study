import { fibonacci, fibRecursive, fibMemo } from '~/fibonacci'

describe('fibonacci', () => {
  let result
  let n
  beforeEach(() => {
    result = fibonacci(n)
  })
  describe('n = 4', () => {
    beforeAll(() => {
      n = 4
    })
    test('should return 3', () => {
      expect(result).toEqual(3)
    })
  })
  describe('n = 12', () => {
    beforeAll(() => {
      n = 12
    })
    test('should return 144', () => {
      expect(result).toEqual(144)
    })
  })
})

describe('fibRecursive', () => {
  let result
  let n
  beforeEach(() => {
    result = fibRecursive(n)
  })
  describe('n = 4', () => {
    beforeAll(() => {
      n = 4
    })
    test('should return 3', () => {
      expect(result).toEqual(3)
    })
  })
  describe('n = 12', () => {
    beforeAll(() => {
      n = 12
    })
    test('should return 144', () => {
      expect(result).toEqual(144)
    })
  })
})

describe('fibMemo', () => {
  let result
  let n
  beforeEach(() => {
    result = fibMemo(n)
  })
  describe('n = 4', () => {
    beforeAll(() => {
      n = 4
    })
    test('should return 3', () => {
      expect(result).toEqual(3)
    })
  })
  describe('n = 12', () => {
    beforeAll(() => {
      n = 12
    })
    test('should return 144', () => {
      expect(result).toEqual(144)
    })
  })
})
