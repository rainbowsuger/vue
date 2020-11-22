// 283. 移动零
// 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。

// 示例:

// 输入: [0,1,0,3,12]
// 输出: [1,3,12,0,0]
// 说明:

// 必须在原数组上操作，不能拷贝额外的数组。
// 尽量减少操作次数。

function moveZero(nums) {
  const len = nums.length;
  if (len < 2) return nums;
  nums.forEach((item, index) => {
    if(!item) {
      nums.splice(index, 1).push(0);
    }
  })
  return nums;
}

console.log(1111, moveZero([0,1,0,3,12]))