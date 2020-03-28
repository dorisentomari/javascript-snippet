import { isPositiveNumber } from '../common/checkDataType';

const fibonacciArray = (n) => {
  if (!isPositiveNumber(n)) {
    return [];
  }

  if (n === 1) {
    return [1];
  }

  if (n === 2) {
    return [1, 1];
  }

  const arr = Array.from({ length: n + 1 }).reduce((prev, curr, i) => {
    return prev.concat(i > 1 ? prev[i - 1] + prev[i - 2] : i);
  }, []);

  arr.splice(0, 1);
  return arr;

};

export default fibonacciArray;
