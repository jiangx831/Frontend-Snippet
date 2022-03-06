import parse from 'url-parse'

// 获取 URL 参数
const getQueryValue = function (constiable) {
  const query = window.location.search.substring(1)
  const consts = query.split('&')
  for (let i = 0; i < consts.length; i++) {
    const pair = consts[i].split('=')
    if (pair[0] === constiable) {
      return pair[1]
    }
  }
  return null
}

// url追加query
const appendQuery = function (url, key, value) {
  const urlObj = parse(url)
  let query = ''
  if (urlObj.query) {
    query = urlObj.query + `&${key}=${value}`
  } else {
    query = `?${key}=${value}`
  }
  urlObj.set('query', query)
  return urlObj.href
}

export { getQueryValue, appendQuery }
