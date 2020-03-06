import { isNumber } from '../common/checkDataType';

// 默认不取边界值
const randomNumberByRange = (leftNumber, rightNumber, { withLeftMargin = false, withRightMargin = false } = {}) => {
  if (!isNumber(leftNumber) || !isNumber(rightNumber)) {
    return 0;
  }

  if (withLeftMargin) {
    leftNumber--;
  }

  if (withRightMargin) {
    rightNumber++;
  }

  return parseInt(Math.random() * (rightNumber - leftNumber - 1) + leftNumber + 1, 10);
};

export default randomNumberByRange;
