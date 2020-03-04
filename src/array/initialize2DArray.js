import { isPositiveNumber } from '../common/checkDataType';

const initialize2DArray = (w = 0, h = 0, initValue = null) => {
  if (!isPositiveNumber(w) && !isPositiveNumber(h)) {
    return [];
  }
  return Array.from({ length: w }).map(() => Array.from({ length: h }).fill(initValue));
};

export default initialize2DArray;
