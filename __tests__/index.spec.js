import { testFunction } from '~/index'

describe('test function', () => {
  let result
  beforeEach(() => {
    result = testFunction()
  })
  test('should return "hello"', () => {
    expect(result).toEqual('hello');
  });
})
