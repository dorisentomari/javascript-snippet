import { isArray, isEmptyObject } from '../common/checkDataType';

const deepGet = (obj = {}, keys = []) => {
  if (isEmptyObject(obj)) {
    return null;
  }

  if (!isArray(keys ) || keys.length === 0) {
    return null;
  }

  return keys.reduce((xs, x) => {
    if (xs && xs[x]) {
      return xs[x];
    }
    return null;
  }, obj);
};

export default deepGet;
