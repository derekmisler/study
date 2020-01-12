import { jsonDiff, formatDiff } from '~jsonDiff'

describe('jsonDiff easy', () => {
  let result
  let jsonOne
  let jsonTwo
  beforeEach(() => {
    result = jsonDiff(jsonOne, jsonTwo)
  })
  describe('updates', () => {
    beforeAll(() => {
      jsonOne = { order: 'hamburger' }
      jsonTwo = { order: 'hot dog' }
    })
    test('should return 1 update', () => {
      expect(result).toContainEqual({
        property: 'order',
        before: 'hamburger',
        after: 'hot dog'
      })
    })
  })
  describe('deletions', () => {
    beforeAll(() => {
      jsonOne = { takeout: 'pizza', side: 'salad' }
      jsonTwo = { takeout: 'pizza' }
    })
    test('should return 1 deletion', () => {
      expect(result).toContainEqual({
        property: 'side',
        before: 'salad'
      })
    })
  })
  describe('insertions', () => {
    beforeAll(() => {
      jsonOne = { return: 'soda' }
      jsonTwo = { return: 'soda', dessert: 'ice cream' }
    })
    test('should return 1 insertion', () => {
      expect(result).toContainEqual({
        property: 'dessert',
        after: 'ice cream'
      })
    })
  })
})

describe('jsonDiff hard', () => {
  let result

  const order1 = {
    sandwich: 'tuna',
    chips: true,
    drink: 'soda',
    order: 1,
    toppings: ['pickles', 'mayo', 'lettuce'],
    details: {
      name: 'Chris',
      phone: '555-555-5555',
      email: 'no@thankyou.com'
    },
    otherVal1: '1'
  }

  const order2 = {
    sandwich: 'turkey',
    chips: true,
    drink: 'soda',
    order: 2,
    toppings: ['pickles', 'lettuce'],
    details: {
      name: 'Jon',
      phone: '(555) 555-5555',
      email: 'yes@please.com'
    },
    otherVal2: '2'
  }

  beforeEach(() => {
    result = jsonDiff(order1, order2)
  })
  describe('updates', () => {
    test('should return 1 update', () => {
      expect(result).toContainEqual(formatDiff('sandwich', 'tuna', 'turkey'))
      expect(result).toContainEqual(formatDiff('order', 1, 2))
      expect(result).toContainEqual(formatDiff('toppings', ['pickles', 'mayo', 'lettuce'], ['pickles', 'lettuce']))
      expect(result).toContainEqual(formatDiff('name', 'Chris', 'Jon'))
      expect(result).toContainEqual(formatDiff('phone', '555-555-5555', '(555) 555-5555'))
      expect(result).toContainEqual(formatDiff('email', 'no@thankyou.com', 'yes@please.com'))
      expect(result).toContainEqual(formatDiff('otherVal2', undefined, '2'))
      expect(result).toContainEqual(formatDiff('otherVal1', '1', undefined))
    })
  })
})

