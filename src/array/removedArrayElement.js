import { isArray } from '../common/checkDataType';

const removedArrayElement = (arr, func) => {
  if (isArray(arr)) {
    return arr.filter(func).reduce((prev, curr) => {
      arr.slice(arr.indexOf(curr), 1);
      return prev.concat(curr);
    }, []);
  }
  return [];
};

export default removedArrayElement;
