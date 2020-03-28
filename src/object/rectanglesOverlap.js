import { isObject, isEmptyObject } from '../common/checkDataType';

export const isRectanglesOverlap = (rect1 = {}, rect2 = {}) => {
  if (!isObject(rect1) || !isObject(rect2) || isEmptyObject(rect1) || isEmptyObject(rect2)) {
    return false;
  }

  const r1 = rect1.x > rect2.x + rect2.width || rect1.y > rect2.y + rect2.height;
  const r2 = rect2.x > rect1.x + rect1.width || rect2.y > rect1.y + rect1.height;

  return !(r1 || r2);
};


