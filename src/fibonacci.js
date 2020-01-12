// Write a function to return an n element in Fibonacci sequence

export const fibonacci = n => {
  const arr = [0, 1]
  for (let i = 2; i <= n; i++){
    arr.push(arr[i - 2] + arr[i - 1])
  }
 return arr[n]
}

export const fibRecursive = n => {
  if (n < 2) return n
  return fibRecursive(n - 1) + fibRecursive(n - 2)
}

export const fibMemo = (n, memo = {}) => {
  if (memo[n]) return memo[n]
  if (n < 2) return n
  return memo[n] = fibMemo(n - 1, memo) + fibMemo(n - 2, memo)
}
