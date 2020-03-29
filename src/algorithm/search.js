// 二分查找法
// 找到 target 返回 target 的 index
// 如果没有找到 target 返回 -1
export const binarySearch = (arr, n, target) => {
  // 在 arr[left...right] 区间查找
  let left = 0;
  let right = n - 1;

  while (left <= right) {
    // const middle = Math.floor((left + right) / 2);
    const middle = Math.floor(left + (right - left) / 2);
    if (target === arr[middle]) {
      return middle;
    }
    // 在 arr[left...middle-1]
    if (target < arr[middle]) {
      right = middle - 1;
    } else {
      // 在 arr[middle+1...right]
      left = middle + 1;
    }
  }
  return -1;
};

