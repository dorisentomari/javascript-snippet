import { isString } from '../common/checkDataType';

// 回文字符串
const palindrome = (str = '') => {
  if (!isString(str)) {
    return false;
  }

  if (str.length === 0) {
    return false;
  }

  const s = str.toLowerCase().replace(/[\W_]/g, '');
  return s === [...s].reverse().join('');
};

export default palindrome;
