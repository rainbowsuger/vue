// 两个数组取交集
getRepeat([4,5,6,9,9], [9,8,7,6,6,9]);  // => [6, 9, 9]
// 数组转化为map,num -> count 的键值对，key值为数组num,value为该值出现次数。
function mark(arr) {
  let resMap = new Map();
  arr.map(item => {
    const count = resMap.get(item);
    if (count) {
      resMap.set(item, count+1)
    } else {
      resMap.set(item, 1)
    }
  })
  return resMap;
}
// 获取到两个数组对应map,如果count2有值代表该数据交集，取count和count较小的数值.
// 可以确定交集中该值出现的次数，出现几次就往交集结果中push几次该值
function getRepeat(arr1, arr2) {
  let map1 = mark(arr1);
  let map2 = mark(arr2);
  let res = [];
  for (let num of map1.keys()) {
    const count1 = map1.get(num)
    const count2 = map2.get(num)

    if (count2) {
      const pushCount = Math.min(count1, count2)
      for (let i = 0; i < pushCount; i++) {
        res.push(num)
      }
    }
  }
  console.log('map1', map1);
  console.log('map2', map2);
  console.log('res', res);
  return res
}
// 冒泡排序 arr = [2,6,5,1,3,7,8,4,9]
// 双重循环，最近两个值之间作比较，直到把最大值放置末尾，再次循环。O(n^2)
sort1([2,6,5,1,3,7,8,4,9]) // [1,2,3,4,5,6]
function sort1(arr) {
  let count = 0;
  for(let i=1; i<arr.length; i++) {
    let flag = false;
    for(let j=1; j<arr.length; j++) {
      count++
      const front = arr[j-1];
      const behind = arr[j];
      if(front > behind) {
        arr[j] = front;
        arr[j-1] = behind;
        flag = true;
      }
    }
    // 如果后面的元素没有发生对换，说明后面元素是有序的，不需要对换，终止循环。
    if(!flag) break;
  }
  // 观察count就可以发现是真的少了循环
  console.log('count', count);
  console.log('arr1', arr);
  return arr;
}
// 选择排序 arr = [2,6,5,1,3,7,8,4,9]
// 双重循环，元素中找到最大最小值，与当前元素对换。O(n^2)
sort2([2,6,5,1,3,7,8,4,9])
function sort2(arr) {
  for(let i=0; i<arr.length;i++) {
    let min = i;
    for(let j=i+1; j<arr.length;j++) {
      if(arr[j]<arr[min]) {
        min = j;
      }
    }
    let temp = arr[min];
    arr[min] = arr[i];
    arr[i] = temp;
  }
  console.log('arr2', arr)
}
// 插入排序 arr = [2,6,5,1,3,7,8,4,9]
// 双重循环，抽取元素插入到新的result数组当中。
sort([2,6,5,1,3,7,8,4,9])
function sort(arr) {
  for(let i=1; i<arr.length;i++) {
    let temp = arr[i];
    let j = 0; // 插入位置
    for(j=i-1; j >= 0;j--) {
      if(arr[j] > temp) {
        arr[j+1] = arr[j]; // 移动数据
      } else {
        break;
      }
    }
    arr[j+1] = temp; // 插入数据
  }
  console.log('arr', arr)
}
// [0,1,1,2,3,5,8,13,21,34...]
/**
 * 计算第n位的值
 * @param {第几位} n 
 * @param {new Mpa()} map 
 */
function fibonacci1 (n, map = new Map()) {
  if(n < 1) return 0;
  if(n === 1 || n === 2) return 1;
  map[n] = fibonacci1(n-1, map) + fibonacci1(n-2, map)
  return map[n];
}
console.log(fibonacci1(4)) // 3
/**
 * 计算前n位fibonacci数的排列
 * @param {前几位} n 
 * @param {[]} map 
 */
function fibonacci2 (n, map = []) {
  if(n < 1) {map[0] = 0; return map;}
  if(n === 1) { map[0] = 0; map[n] = 1; return map; }
  map[n] = fibonacci2(n-1, map)[n-1] + fibonacci2(n-2, map)[n-2]
  return map;
}
console.log(fibonacci2(10)) // [ 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55 ]

/**
 *  解决a.b.c.d.e嵌套直接调用可能抛异常
 *  只考虑对象
 *  @param {map总数据} map
 *  @param {需要取值的key} key
 *  @param {默认值} defaultVal
 */
function _get(source, key, defaultVal = undefined) {
  let map = Object.assign({}, source);
  let result = null;
  const keys = (key.indexOf('.') !== -1) ? key.split('.') : key ? [key] : [];
  if (keys.length) {
    keys.forEach( item => {
      if (map[item]) {
        map = map[item];
      } else {
        map = defaultVal;
      }
    })
  }
  return map;
}
const get = (object, keys, val) => {
  return keys.split(/\./).reduce((o, j) => ((o || {})[j]), object) || val
}
console.log(_get({a:{b:{c:{d:'rainbow'}}}}, 'a.b.c.d', 'suger'))
console.log(_get({a:{b:{c:{d:'rainbow'}}}}, 'a.b.c.d.e.f', 'suger'))
console.log(_get({a:{b:{c:{d:'rainbow'}}}}, 'a', 'suger'))
console.log(get({a:{b:{c:{d:'rainbow'}}}}, 'a.b.c.d', 'suger'))
console.log(get({a:{b:{c:{d:'rainbow'}}}}, 'a.b.c.d.e.f', 'suger'))
console.log(get({a:{b:{c:{d:'rainbow'}}}}, 'a', 'suger'))

/**
 * reduce实现数组数值相加
 */
function sum1(arr = []) {
  return arr.reduce((total, cur) => total += cur, 0)
}

console.log('sum[1,2,3,4,5,6]:', sum1([1,2,3,4,5,6]))

/**
 *  实现 add(1)(2)(3) // 6
 *  函数柯里化
 */
function sum(...arg) {
  return arg.reduce((total, cur) => total += cur, 0)
}
function currying(fn) {
  let newArgs = [];
  return function temp(...args) {
    if(args.length) {
      newArgs = [...newArgs, ...args]
      return temp;
    } else {
      const newFn = fn.apply(this, newArgs);
      newArgs = [];
      return newFn
    }
  }
}
const addCurrying = currying(sum);
console.log(addCurrying(1,2,3)()) // 6
console.log(addCurrying(1,2)(3)()) // 6
console.log(addCurrying(1)(2)(3)()) // 6

/**
 *  实现给定数组中找到两个元素相加和目标值的数据下标
 *  @param {map总数据} map
 *  @param {需要取值的key} key
 *  @param {默认值} defaultVal
 */

 function gettarget(args = [], target) {
   let result = [];
  args.forEach((item1, index1) => {
    args.forEach((item2, index2) => {
      if(item1 + item2 === target) {
        if(index1 !== index2) {
          result.push(index1,index2)
        }
      }
    })
  })
  return Array.from(new Set(result));
}
console.log(gettarget([2,7,3,4,5], 9));