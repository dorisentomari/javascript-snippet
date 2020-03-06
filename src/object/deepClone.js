import { isArray, isNull, isUndefined } from '../common/checkDataType';

const deepClone = (obj) => {
  if (isNull(obj) || isUndefined(obj)) {
    return obj;
  }

  const clone = Object.assign({}, obj);

  Object.keys(clone).forEach(key => {
    clone[key] = typeof obj[key] === 'object' ? deepClone(obj[key]) : obj[key];
  });

  if (isArray(obj)) {
    if (obj.length > 0) {
      clone.length = obj.length;
    }
    return Array.from(clone);
  }

  return clone;
};

export default deepClone;
