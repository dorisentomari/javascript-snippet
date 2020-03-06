import { isObject } from '../common/checkDataType';

const JSONtoCSV = (arr = [], columns = [], delimiter = ',') => {
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    if (!isObject(item)) {
      throw new TypeError('数组元素必须是对象');
    }
  }
  
  return [
    columns.join(delimiter),
    ...arr.map(obj => {
      return columns.reduce((prev, curr) => {
        return `${prev}${prev.length ? delimiter: ''}${obj[curr]}`;
      }, '');
    })
  ].join('\n').trim();
};

export default JSONtoCSV;
