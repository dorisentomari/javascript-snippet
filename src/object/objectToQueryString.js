import { isBoolean, isNumber, isString } from '../common/checkDataType';

const objectToQueryString = queryParameters => {
  if (!queryParameters) {
    return '';
  }

  return Object.entries(queryParameters).reduce((queryString, [key, value]) => {
    const symbol = queryString.length === 0 ? '?' : '&';

    if (isNumber(value) || isString(value) || isBoolean(value)) {
      queryString += `${symbol}${key}=${value}`;
    } else {
      queryString += '';
    }

    return queryString;
  }, '');
};

export default objectToQueryString;
