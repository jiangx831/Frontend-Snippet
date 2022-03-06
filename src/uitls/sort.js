/**
 * 字符串数组按照ASCII编码排序
 * @param {Array} arr
 * @returns
 */
 export function stringArraySort(arr) {
  return arr.sort(function (s, t) {
    const a = s.toLowerCase()
    const b = t.toLowerCase()
    if (a < b) return -1
    if (a > b) return 1
    return 0
  })
}