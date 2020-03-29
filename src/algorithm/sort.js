// O^2 选择排序
export const selectionSort = (arr, n) => {
  for (let i = 0; i < n; i++) {
    let minIndex = i;
    let j;
    for (j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
  }
};

// O^2 冒泡排序
export const bubbleSort = (arr, n) => {
  let swapped;

  do {
    swapped = false;
    for (let i = 0; i < n; i++) {
      if (arr[i - 1] > arr[i]) {
        [arr[i - 1], arr[i]] = [arr[i], arr[i - 1]];
        swapped = true;
      }
    }
    n--;

  } while (swapped);

};

// O^2 插入排序优化，对于近乎有序的数组【日志】，性能特别高，甚至高于 nlogn 排序算法
export const insertSort = (arr, n) => {
  for (let i = 1; i < n; i++) {
    // 寻找元素 arr[i]合适的插入位置
    const e = arr[i];
    // 确保元素 e 应该插入的位置
    let j;
    for (j = i; j > 0 && arr[j - 1] > e; j--) {
      arr[j] = arr[j - 1];
    }
    arr[j] = e;
  }
  return arr;
};

// O^2 插入排序区间
export const insertSortRange = (arr, left, right) => {
  for (let i = left + 1; i <= right; i++) {
    const e = arr[i];
    let j;
    for (j = i; j > left && arr[j - 1] > e; j--) {
      arr[j] = arr[j - 1];
    }
    arr[j] = e;
  }
};

// O^2 选择排序优化
export const selectionSortOptimize = (arr, n) => {
  let left = 0;
  let right = n - 1;

  while (left < right) {
    let minIndex = left;
    let maxIndex = right;


    if (arr[minIndex] > arr[maxIndex]) {
      [arr[minIndex], arr[maxIndex]] = [arr[maxIndex], arr[minIndex]];
    }

    for (let i = left + 1; i < right; i++) {
      if (arr[i] < arr[minIndex]) {
        minIndex = i;
      } else if (arr[i] > arr[maxIndex]) {
        maxIndex = i;
      }
    }

    [arr[left], arr[minIndex]] = [arr[minIndex], arr[left]];
    [arr[right], arr[maxIndex]] = [arr[maxIndex], arr[right]];

    left++;
    right--;
  }

};

// O^2 冒泡排序优化
export const bubbleSortOptimize = (arr, n) => {
  let newN;

  do {
    newN = 0;
    for (let i = 0; i < n; i++) {
      if (arr[i - 1] > arr[i]) {
        [arr[i - 1], arr[i]] = [arr[i], arr[i - 1]];
        newN = i;
      }
    }
    n = newN;
  } while (newN > 0);

};

const __merge = (arr, left, middle, right) => {
  // 临时空间 auxiliary
  const aux = Array.from({ length: right - left + 1 });

  for (let i = left; i <= right; i++) {
    aux[i - left] = arr[i];
  }

  let i = left;
  let j = middle + 1;

  for (let k = left; k <= right; k++) {
    if (i > middle) {
      arr[k] = aux[j - left];
      j++;
    } else if (j > right) {
      arr[k] = aux[i - left];
      i++;
    } else if (aux[i - left] < aux[j - left]) {
      arr[k] = aux[i - left];
      i++;
    } else {
      arr[k] = aux[j - left];
      j++;
    }
  }

};

// nlogn 归并排序
export const mergeSort = (arr, n, lastNumber = 15) => {
  const __mergeSort = (arr, left, right) => {
    if (left - right <= lastNumber) {
      insertSortRange(arr, left, right);
      return;
    }

    const middle = Math.floor((left + right) / 2);

    __mergeSort(arr, left, middle);
    __mergeSort(arr, middle + 1, right);

    if (arr[middle] > arr[middle + 1]) {
      __merge(arr, left, middle, right);
    }
  };

  // arr[l...r]
  __mergeSort(arr, 0, n - 1);
};

// nlogn 归并排序，自底向上
export const mergeSortBottomToUp = (arr, n) => {
  for (let size = 1; size <= n; size *= 2) {
    for (let i = 0; i + size < n; i += size * 2) {
      // 对 arr[i...i+size-1] 和 arr[i+size...i+2*size-1]
      __merge(arr, i, i + size - 1, Math.min(i + size + size - 1, n - 1));
    }
  }
};

// nlogn 快速排序
export const quickSort = (arr, n) => {

  // 对 arr[left...right] 部分进行 partition 排序
  // 返回 p，使得 arr[left...p-1] < arr[p]; arr[p+1...right] > arr[p]
  const __partition = (arr, left, right) => {
    // 如果近乎有序数组，那么可以随机生成标的物，因为如果是近乎有序的数组，快速排序近乎退化到 O^2 排序算法
    // 默认标的物为最左侧
    // swap(arr[left], arr[rand()%(r-l+1)+l])

    const randomIndex = Math.floor(Math.random() * (right - left + 1) + left);
    [arr[left], arr[randomIndex]] = [arr[randomIndex], arr[left]];

    const v = arr[left];

    let j = left;

    for (let i = left + 1; i <= right; i++) {
      if (arr[i] < v) {
        [arr[j + 1], arr[i]] = [arr[i], arr[j + 1]];
        j++;
      }
    }

    [arr[left], arr[j]] = [arr[j], arr[left]];
    return j;
  };

  // 对 arr[left...right] 部分进行快速排序
  const __quickSort = (arr, left, right) => {
    if (left >= right) {
      return;
    }

    const p = __partition(arr, left, right);

    __quickSort(arr, left, p - 1);
    __quickSort(arr, p + 1, right);
  };

  __quickSort(arr, 0, n - 1);
};

// nlogn 快速排序优化 1
export const quickSortOptimize = (arr, n) => {
  const __partition = (arr, left, right) => {
    const randomIndex = Math.floor(Math.random() * (right - left + 1) + left);
    [arr[left], arr[randomIndex]] = [arr[randomIndex], arr[left]];

    const v = arr[left];

    // arr[left+1...i) <= v; arr(j...right] >= v;
    let i = left + 1;
    let j = right;

    while (true) {
      while (i <= right && arr[i] < v) {
        i++;
      }

      while (j >= left + 1 && arr[j] >= v) {
        j--;
      }

      if (i > j) {
        break;
      }

      [arr[i], arr[j]] = [arr[j], arr[i]];
      i++;
      j--;
    }

    [arr[left], arr[j]] = [arr[j], arr[left]];

    return j;
  };

  const __quickSort = (arr, left, right) => {
    if (right - left <= 15) {
      insertSortRange(arr, left, right);
      return;
    }

    const p = __partition(arr, left, right);

    __quickSort(arr, left, p - 1);
    __quickSort(arr, p + 1, right);
  };

  __quickSort(arr, 0, n - 1);
};

// nlogn 快速排序优化 2
export const quickSort3Ways = (arr, n) => {
  // 三路快速排序处理 arr[left...right]
  // 将 arr[left...right] 分为 < v; ==v; > v; 三个部分
  // 之后将递归对 < v; > v; 两部分继续进行三路快速排序

  const __quickSort3Ways = (arr, left, right) => {
    if (right - left <= 15) {
      insertSortRange(arr, left, right);
      return;
    }

    // partition
    const randomIndex = Math.floor(Math.random() * (right - left + 1) + left);
    [arr[left], arr[randomIndex]] = [arr[randomIndex], arr[left]];

    const v = arr[left];

    // arr[left+1...lt] < v
    let lT = left;

    // arr[gt...right] > v
    let gT = right + 1;

    // arr[lt+1...i] == v
    let i = left + 1;

    while (i < gT) {
      if (arr[i] < v) {
        [arr[i], arr[lT + 1]] = [arr[lT + 1], arr[i]];
        lT++;
        i++;
      } else if (arr[i] > v) {
        [arr[i], arr[gT - 1]] = [arr[gT - 1], arr[i]];
        gT--;
      } else {
        i++;
      }
    }

    [arr[left], arr[lT]] = [arr[lT], arr[left]];

    __quickSort3Ways(arr, left, lT - 1);
    __quickSort3Ways(arr, gT, right);
  };

  __quickSort3Ways(arr, 0, n - 1);
};
