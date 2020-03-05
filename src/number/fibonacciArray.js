import {  isNegativeNumber } from '../common/checkDataType';

const fibonacciArray = (n) => {
  if (isNegativeNumber(n)) {
    return [];
  }

  if (n === 0) {
    return [0];
  }

  return Array.from({ length: n }).reduce((prev, curr, i) => {
    return prev.concat(i > 1 ? prev[i - 1] + prev[i - 2] : i);
  }, []);
};

export default fibonacciArray;
