// N个数的最小公倍数
export function minCM(list) {
  if(list.length === 1) return list[0]

  return list.reduce((a,b) => {
    let max = Math.max(a, b)
    let total = max

    while(!(total % a === 0 && total % b === 0)) {
      total += max
    }

    return total
  })
}