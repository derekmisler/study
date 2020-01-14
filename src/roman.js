// number to roman numeral

export const roman = n => {
  const numeralObj = {
    M: 1000,
    D: 500,
    C: 100,
    L: 50,
    XX: 20,
    X: 10,
    IX:9,
    V: 5,
    IV: 4,
    III: 3,
    II: 2,
    I: 1
  }
  let romans = ''
  let remainder = n
  for (let r of Object.keys(numeralObj)) {
    while ( remainder >= numeralObj[r] ) {
      remainder -= numeralObj[r]
      romans += r
    }
  }
  return romans
}
