import { isString } from '../common/checkDataType';

const escapeCharMap = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '\'': '&#39;',
  '"': '&quot;'
};

const escapeHTML = (str = '') => {
  if (!isString(str) || str.length === 0) {
    return str;
  }

  return str.replace(/[&<>'"]/g, tag => (escapeCharMap[tag]));
};

export default escapeHTML;
