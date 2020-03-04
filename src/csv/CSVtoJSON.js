import { isString } from '../common/checkDataType';

const CSVtoJSON = (data = '', delimiter = ',') => {
  if (isString(data)) {
    if (data.length === 0) {
      return {};
    }
    const firstLineIndex = data.indexOf('\n');
    const titles = data.slice(0, firstLineIndex).split(delimiter);
    const restData = data.slice(firstLineIndex + 1);

    return restData
      .split('\n')
      .map(v => {
        const values = v.split(delimiter);
        return titles.reduce((prev, curr, index) => ((prev[curr] = values[index]), prev), {});
      });
  }

  return {};
};

export default CSVtoJSON;
