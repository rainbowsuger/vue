class Subject {
  constructor (name, age) {
    this.name = name
    this.age = age
  }
  sayName () {
    console.log(this.name)
  }
}
class Observer1 extends Subject {
  constructor (...args) {
    super(...args)
    console.log(33333333, super.name)
    console.log(33333333, super.sayName())
    this.state = {}
  }
}

class Observer2 extends Subject {

}

let o1 = new Observer1('cc')
let o2 = new Observer2('kk')
console.log(111111111111111, o1.name)
console.log(2222222222222222, o2.name)
let myMap = new Map()

let keyObj = {}
let keyFunc = function () {}
let keyString = 'a string'

// 添加键
myMap.set(keyString, "和键'a string'关联的值")
myMap.set(keyObj, '和键keyObj关联的值')
myMap.set(keyFunc, '和键keyFunc关联的值')

console.log(myMap.size) // 3

// 读取值
console.log(myMap.get(keyString)) // "和键'a string'关联的值"
console.log(myMap.get(keyObj)) // "和键keyObj关联的值"
console.log(myMap.get(keyFunc)) // "和键keyFunc关联的值"

console.log(myMap.get('a string')) // "和键'a string'关联的值"
// 因为keyString === 'a string'
console.log(myMap.get({})) // undefined, 因为keyObj !== {}
console.log(myMap.get(function () {})) // undefined, 因为keyFunc !== function () {}
console.log(myMap.set(NaN, 'not a number'))

console.log(myMap.get(NaN)) // "not a number"

let otherNaN = Number('foo')
console.log(myMap.get(otherNaN)) // "not a number"
console.log(myMap.get(NaN)) // "not a number"
