import { isArray, isFunction } from '../common/checkDataType';

const uniqueElementsBy = (arr = [], fn) => {
  if (!isArray(arr)) {
    return [];
  }

  if (!isFunction(fn)) {
    return arr;
  }

  return arr.reduce((prev, curr) => {
    // curr 为当次比较的值
    // x 为 prev 的某个元素
    if (!prev.some(x => fn(curr, x))) {
      prev.push(curr);
    }
    return prev;
  }, []);
};

export default uniqueElementsBy;
