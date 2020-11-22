/**
 * forEach里面使用async,不会起作用，同样还是异步执行，因为内部封装了while。
 * while (index < arr.length) {
      callback(item, index)   //也就是我们传入的回调函数
    }
 * forEach 只是简单的执行了下回调函数而已，并不会去处理异步的情况。 并且你在 callback 中即使使用 break 也并不能结束遍历。
 * 可以使用for...of... for,因为其内部处理机制是通过迭代器的方式去遍历，如下test
 *  
 * */ 

const init = async (i) => {
  return await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(i*i);
    }, 1000);
  })
}


const arr = [1, 2, 3, 4];

// 输出：同时输出1、4、9、16
arr.forEach(async (i) => {
  let res = await init(i);
  console.log(res);
})

// 输出：每间隔一秒输出1、4、9、16
async function main () {
  for (let i of arr){
    let res = await init(i);
    console.log(res);
  }
}
// main()


// Symbol.iterator迭代器，每一个对象定义了默认的迭代器，该迭代器可以被 for...of 循环结构使用
async function test() {
  const iterator = arr[Symbol.iterator]()
  let res = iterator.next()
  // 强大
  // 判断该item有没有执行done,如上述promise加了async-await没有结束就会进入while,等待执行完成之后再进行next(); 
  while (!res.done) {
   console.log(res) // { value: 4, done: false }
   const value = res.value
   const res1 = await init(value)
   console.log(res1)
   res = iterator.next()
  }
  console.log('end')
 }
 test()