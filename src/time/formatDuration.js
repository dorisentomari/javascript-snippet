import {
  ONE_SECOND,
  ONE_MINUTE,
  ONE_HOUR,
  ONE_DAY
} from './constant';
import { isNumber } from '../common/checkDataType';

const formatDuration = ms => {
  if (!isNumber(ms)) {
    return '';
  }

  ms = Math.abs(ms);

  const time = {
    day: Math.floor(ms / ONE_DAY),
    hour: Math.floor(ms / ONE_HOUR) % 24,
    minute: Math.floor(ms / ONE_MINUTE) % 60,
    second: Math.floor(ms / ONE_SECOND) % 60,
    millisecond: Math.floor(ms) % 1000
  };

  return Object.entries(time)
    .filter(val => val[1] !== 0)
    .map(([key, value]) => `${value} ${key}${value !== 1 ? 's' : ''}`)
    .join(', ');
};

export default formatDuration;
