/**
 * @param {number} e 需要产生随机字符串的长度
 * @returns 模拟随机字符串库
 */
 export function randomString(e = 32) {
  const t = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678'
  const a = t.length // 字符串t的长度，随机数生成最大值
  let n = ''
  for (let i = 0; i < e; i++) {
    // 随机生成长度为e的随机字符串拼接
    n += t.charAt(Math.floor(Math.random() * a))
  }
  // 返回随机组合字符串
  return n
}