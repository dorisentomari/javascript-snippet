import {
  ONE_DAY,
} from './constant';
import { isValidDate } from '../common/checkDataType';

const getDaysDiffBetweenDates = (startDate, endDate) => {
  if (!isValidDate(startDate = new Date(startDate))) {
    return 0;
  }

  if (!isValidDate(endDate = new Date(endDate))) {
    return 0;
  }

  return Math.abs(endDate - startDate) / ONE_DAY;
};

export default getDaysDiffBetweenDates;
