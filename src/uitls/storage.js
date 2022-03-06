export const storage = {
  get: function (key) {
    try {
      if (!localStorage) {
        return null
      }

      const rawValue = JSON.parse(localStorage.getItem(key))
      if (!rawValue) {
        return null
      }

      const now = Date.now()
      if (now > rawValue.expire) {
        this.remove(key)
        return null
      }

      return rawValue.value
    } catch (error) {
      console.error(`get ${key} from localStorage error: ${error.message}`)
      return null
    }
  },

  set: function (key, value, expire) {
    try {
      if (!localStorage) {
        return
      }

      if (!expire || isNaN(expire)) {
        expire = 60 * 60 * 24 * 7
      }
      const data = {
        value: value,
        expire: Date.now() + expire * 1000
      }
      localStorage.setItem(key, JSON.stringify(data))
    } catch (error) {
      console.error(`set localStorage error: ${error.message}`)
    }
  },

  remove: function (key) {
    if (!localStorage) {
      return false
    }
    localStorage.removeItem(key)
  },

  clearAll: function () {
    if (!localStorage) {
      return false
    }
    localStorage.clear()
  }
}
