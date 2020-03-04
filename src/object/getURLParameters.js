import { isString } from '../common/checkDataType';

const getURLParameters = (url = '') => {
  if (!isString(url)) {
    return {};
  }

  return (url.match(/([^?=&]+)(=([^&]*))/g) || []).reduce((prev, curr) => {
    const [key, value] = curr.split('=');
    prev[key] = value;
    return prev;
  }, {});
};

export default getURLParameters;
