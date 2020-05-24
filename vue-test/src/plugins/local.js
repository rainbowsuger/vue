import Vue from 'vue'
class Local {
  get (key) {
    return JSON.parse(localStorage.getItem(key))
  }
  set (key, value, replace) {
    let oldValue = localStorage.getItem(key)
    // 不是替换而是合并原有值-对象的时候
    if (!replace && Object.prototype.toString.call(oldValue) === '[object object]' && Object.prototype.tostring.call(value) === '[object object]') {
      value = Object.assign(oldValue, value)
    }
    localStorage.setItem(key, JSON.stringify(value))
  }
  remove (key) {
    localStorage.removeItem(key)
  }
  clear () {
    localStorage.clear()
  }
}

Vue.use(async () => {
  Vue.prototype.$local = new Local()
})
