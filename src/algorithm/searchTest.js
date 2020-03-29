import * as search from './search';

export const searchTest = () => {
  const arr = [1, 2, 4, 5 ,7, 12, 16, 23, 45, 54, 67, 71, 76, 82, 83];
  const index1 = search.binarySearch(arr, arr.length, 82);
  console.log(index1);
};
