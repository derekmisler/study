// Given an object with an operator as a key and another object as a value, write a
// function that will perform the operator on the value. So you could be given
// something like {+,[1,2,3]} and your function would add the 3 values or you could
// be given something like {+,[1,2,{-,[1,2]}]} and have to recursively work.

const operatorMap = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
  '/': (a, b) => a / b
}

export const calculate = obj => {
  const operator = Object.keys(obj)[0]
  const numbers = obj[operator]
  return numbers.reduce((total, val) => {
    if (total === 0) return val
    if (typeof val === 'object') {
      return operatorMap[operator](total, calculate(val))
    }
    return operatorMap[operator](total, val)
  }, 0)
}
