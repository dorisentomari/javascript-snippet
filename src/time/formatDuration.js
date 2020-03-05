import {
  ONE_SECOND,
  ONE_SECOND_MILLISECONDS,
  ONE_MINUTE,
  ONE_MINUTE_SECONDS,
  ONE_HOUR,
  ONE_HOUR_MINUTES,
  ONE_DAY,
  ONE_DAY_HOURS
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
