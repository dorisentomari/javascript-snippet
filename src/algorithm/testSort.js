import * as sort from './Sort';
import * as sortHelper from './SortHelper';

export const testSort = (n, rangeL, rangeR) => {

  const testArray = [
    { arr: sortHelper.generateRandomArray(n, rangeL, rangeR), tag: '完全随机数组' },
    { arr: sortHelper.generateNearlyOrderedArray(n, 100), tag: '近乎有序随机数组' }
  ];

  for (let i = 0; i < testArray.length; i++){
    const { arr, tag } = testArray[i];

    const arr1 = sortHelper.copyArray(arr, n);
    const arr2 = sortHelper.copyArray(arr, n);
    // const arr3 = sortHelper.copyArray(arr, n);
    // const arr4 = sortHelper.copyArray(arr, n);
    const arr5 = sortHelper.copyArray(arr, n);
    const arr6 = sortHelper.copyArray(arr, n);
    const arr7 = sortHelper.copyArray(arr, n);
    const arr8 = sortHelper.copyArray(arr, n);

    console.log(`%c${tag}`, 'color: red;');
    sortHelper.sortTime(sort.selectionSort, arr1, n);
    sortHelper.sortTime(sort.selectionSortOptimize, arr2, n);
    // sortHelper.sortTime(sort.bubbleSort, arr3, n);
    // sortHelper.sortTime(sort.bubbleSortOptimize, arr4, n);
    sortHelper.sortTime(sort.insertSort, arr5, n);
    sortHelper.sortTime(sort.mergeSort, arr6, n);
    sortHelper.sortTime(sort.mergeSortBottomToUp, arr7, n);
    sortHelper.sortTime(sort.quickSort, arr8, n);
  }
};
