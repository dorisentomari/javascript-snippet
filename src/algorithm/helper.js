export const generateRandomArray = (n, rangeL, rangeR) => {
  const arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(Math.floor(Math.random() * (rangeR - rangeL + 1) + rangeL));
  }
  return arr;
};

export const generateNearlyOrderedArray = (n, swapTimes) => {
  const arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(i);
  }

  for (let i = 0; i < swapTimes; i++) {
    const posX = Math.floor(Math.random() * n);
    const posY = Math.floor(Math.random() * n);
    [arr[posX], arr[posY]] = [arr[posY], arr[posX]];
  }
  return arr;
};

export const isSorted = (arr, n = arr.length) => {
  for (let i = 0; i < n - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      return false;
    }
  }
  return true;
};

export const sortTime = (sortFn, arr, n) => {
  console.time(sortFn.name);
  sortFn(arr, n);
  if (!isSorted(arr)) {
    console.log(`${sortFn.name} 没有被排序`);
  }
  console.timeEnd(sortFn.name);
};

export const copyArray = (arr, n) => {
  const newArr = [];
  for (let i = 0; i < n; i++) {
    newArr.push(arr[i]);
  }
  return newArr;
};

export const printArray = (arr) => {
  console.log(arr);
};