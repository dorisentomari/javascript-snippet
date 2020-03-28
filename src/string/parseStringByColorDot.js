import { isString } from '../common/checkDataType';

export const parseStringByColorDot = (str = '') => {
  if (!isString(str) || str.length === 0) {
    return [];
  }

  const matches = str.match(/(:\w+\.)/g);
  if (matches) {
    matches.map(v => {
      const result = v.match(/\w+/g);
      if (result) {
        return result[0];
      }
      return '';
    }).filter(Boolean);
  }
  return [];
};