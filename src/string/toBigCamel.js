import { isString } from '../common/checkDataType';

const toBigCamel = (str = '') => {
  if (!isString(str)) {
    return '';
  }

  while (str.match(/\w_\w/)) {
    str = str.replace(/(\w)(_)(\w)/, (match, $1, $2, $3) => `${$1}${$3.toUpperCase()}`);
  }
  return str;
};

export default toBigCamel;
