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

// nlogn 希尔排序
export const shellSort = (arr, n) => {
  let h = 1;

  while (h < Math.floor(n / 3)) {
    h = 3 * h + 1;
  }

  while (h >= 1) {
    for (let i = h; i < n; i++) {
      const e = arr[i];
      let j;
      for (j = i; j >= h && e < arr[j - h]; j -= h) {
        [arr[j], arr[j - h]] = [arr[j - h], arr[j]];
      }
      arr[j] = e;
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
