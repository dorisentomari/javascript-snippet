import * as checkDataType from '../checkDataType';

describe('test checkDataType', () => {
  const NUMBER = 1;
  const STRING = 'hello';
  const TRUE = true;
  const FALSE = false;
  const UNDEFINED = undefined;
  const NULL = null;
  const SYMBOL = Symbol();
  const OBJECT = {};
  const ARRAY = [];
  const DATE = new Date();
  const REGEXP = new RegExp('');
  const FUNCTION = function() {};
  const ERROR = new Error();

  test('01 测试 Number 数据类型', () => {
    expect(checkDataType.isNumber(NUMBER)).toEqual(true);
    expect(checkDataType.isNumber(STRING)).toEqual(false);
    expect(checkDataType.isNumber(TRUE)).toEqual(false);
    expect(checkDataType.isNumber(FALSE)).toEqual(false);
    expect(checkDataType.isNumber(UNDEFINED)).toEqual(false);
    expect(checkDataType.isNumber(NULL)).toEqual(false);
    expect(checkDataType.isNumber(SYMBOL)).toEqual(false);
    expect(checkDataType.isNumber(OBJECT)).toEqual(false);
    expect(checkDataType.isNumber(ARRAY)).toEqual(false);
    expect(checkDataType.isNumber(DATE)).toEqual(false);
    expect(checkDataType.isNumber(REGEXP)).toEqual(false);
    expect(checkDataType.isNumber(FUNCTION)).toEqual(false);
    expect(checkDataType.isNumber(ERROR)).toEqual(false);
  });

  test('02 测试 String 数据类型', () => {
    expect(checkDataType.isString(NUMBER)).toEqual(false);
    expect(checkDataType.isString(STRING)).toEqual(true);
    expect(checkDataType.isString(TRUE)).toEqual(false);
    expect(checkDataType.isString(FALSE)).toEqual(false);
    expect(checkDataType.isString(UNDEFINED)).toEqual(false);
    expect(checkDataType.isString(NULL)).toEqual(false);
    expect(checkDataType.isString(SYMBOL)).toEqual(false);
    expect(checkDataType.isString(OBJECT)).toEqual(false);
    expect(checkDataType.isString(ARRAY)).toEqual(false);
    expect(checkDataType.isString(DATE)).toEqual(false);
    expect(checkDataType.isString(REGEXP)).toEqual(false);
    expect(checkDataType.isString(FUNCTION)).toEqual(false);
    expect(checkDataType.isString(ERROR)).toEqual(false);
  });

  test('03 测试 UNDEFINED 数据类型', () => {
    expect(checkDataType.isUndefined(NUMBER)).toEqual(false);
    expect(checkDataType.isUndefined(STRING)).toEqual(false);
    expect(checkDataType.isUndefined(TRUE)).toEqual(false);
    expect(checkDataType.isUndefined(FALSE)).toEqual(false);
    expect(checkDataType.isUndefined(UNDEFINED)).toEqual(true);
    expect(checkDataType.isUndefined(NULL)).toEqual(false);
    expect(checkDataType.isUndefined(SYMBOL)).toEqual(false);
    expect(checkDataType.isUndefined(OBJECT)).toEqual(false);
    expect(checkDataType.isUndefined(ARRAY)).toEqual(false);
    expect(checkDataType.isUndefined(DATE)).toEqual(false);
    expect(checkDataType.isUndefined(REGEXP)).toEqual(false);
    expect(checkDataType.isUndefined(FUNCTION)).toEqual(false);
    expect(checkDataType.isUndefined(ERROR)).toEqual(false);
  });

  test('04 测试 NULL 数据类型', () => {
    expect(checkDataType.isNull(NUMBER)).toEqual(false);
    expect(checkDataType.isNull(STRING)).toEqual(false);
    expect(checkDataType.isNull(TRUE)).toEqual(false);
    expect(checkDataType.isNull(FALSE)).toEqual(false);
    expect(checkDataType.isNull(UNDEFINED)).toEqual(false);
    expect(checkDataType.isNull(NULL)).toEqual(true);
    expect(checkDataType.isNull(SYMBOL)).toEqual(false);
    expect(checkDataType.isNull(OBJECT)).toEqual(false);
    expect(checkDataType.isNull(ARRAY)).toEqual(false);
    expect(checkDataType.isNull(DATE)).toEqual(false);
    expect(checkDataType.isNull(REGEXP)).toEqual(false);
    expect(checkDataType.isNull(FUNCTION)).toEqual(false);
    expect(checkDataType.isNull(ERROR)).toEqual(false);
  });

  test('05 测试 SYMBOL 数据类型', () => {
    expect(checkDataType.isSymbol(NUMBER)).toEqual(false);
    expect(checkDataType.isSymbol(STRING)).toEqual(false);
    expect(checkDataType.isSymbol(TRUE)).toEqual(false);
    expect(checkDataType.isSymbol(FALSE)).toEqual(false);
    expect(checkDataType.isSymbol(UNDEFINED)).toEqual(false);
    expect(checkDataType.isSymbol(NULL)).toEqual(false);
    expect(checkDataType.isSymbol(SYMBOL)).toEqual(true);
    expect(checkDataType.isSymbol(OBJECT)).toEqual(false);
    expect(checkDataType.isSymbol(ARRAY)).toEqual(false);
    expect(checkDataType.isSymbol(DATE)).toEqual(false);
    expect(checkDataType.isSymbol(REGEXP)).toEqual(false);
    expect(checkDataType.isSymbol(FUNCTION)).toEqual(false);
    expect(checkDataType.isSymbol(ERROR)).toEqual(false);
  });

  test('06 测试 OBJECT 数据类型', () => {
    expect(checkDataType.isObject(NUMBER)).toEqual(false);
    expect(checkDataType.isObject(STRING)).toEqual(false);
    expect(checkDataType.isObject(TRUE)).toEqual(false);
    expect(checkDataType.isObject(FALSE)).toEqual(false);
    expect(checkDataType.isObject(UNDEFINED)).toEqual(false);
    expect(checkDataType.isObject(NULL)).toEqual(false);
    expect(checkDataType.isObject(SYMBOL)).toEqual(false);
    expect(checkDataType.isObject(OBJECT)).toEqual(true);
    expect(checkDataType.isObject(ARRAY)).toEqual(false);
    expect(checkDataType.isObject(DATE)).toEqual(false);
    expect(checkDataType.isObject(REGEXP)).toEqual(false);
    expect(checkDataType.isObject(FUNCTION)).toEqual(false);
    expect(checkDataType.isObject(ERROR)).toEqual(false);
  });

  test('07 测试 ARRAY 数据类型', () => {
    expect(checkDataType.isArray(NUMBER)).toEqual(false);
    expect(checkDataType.isArray(STRING)).toEqual(false);
    expect(checkDataType.isArray(TRUE)).toEqual(false);
    expect(checkDataType.isArray(FALSE)).toEqual(false);
    expect(checkDataType.isArray(UNDEFINED)).toEqual(false);
    expect(checkDataType.isArray(NULL)).toEqual(false);
    expect(checkDataType.isArray(SYMBOL)).toEqual(false);
    expect(checkDataType.isArray(OBJECT)).toEqual(false);
    expect(checkDataType.isArray(ARRAY)).toEqual(true);
    expect(checkDataType.isArray(DATE)).toEqual(false);
    expect(checkDataType.isArray(REGEXP)).toEqual(false);
    expect(checkDataType.isArray(FUNCTION)).toEqual(false);
    expect(checkDataType.isArray(ERROR)).toEqual(false);
  });

  test('08 测试 DATE 数据类型', () => {
    expect(checkDataType.isDate(NUMBER)).toEqual(false);
    expect(checkDataType.isDate(STRING)).toEqual(false);
    expect(checkDataType.isDate(TRUE)).toEqual(false);
    expect(checkDataType.isDate(FALSE)).toEqual(false);
    expect(checkDataType.isDate(UNDEFINED)).toEqual(false);
    expect(checkDataType.isDate(NULL)).toEqual(false);
    expect(checkDataType.isDate(SYMBOL)).toEqual(false);
    expect(checkDataType.isDate(OBJECT)).toEqual(false);
    expect(checkDataType.isDate(ARRAY)).toEqual(false);
    expect(checkDataType.isDate(DATE)).toEqual(true);
    expect(checkDataType.isDate(REGEXP)).toEqual(false);
    expect(checkDataType.isDate(FUNCTION)).toEqual(false);
    expect(checkDataType.isDate(ERROR)).toEqual(false);
  });

  test('09 测试 REGEXP 数据类型', () => {
    expect(checkDataType.isRegExp(NUMBER)).toEqual(false);
    expect(checkDataType.isRegExp(STRING)).toEqual(false);
    expect(checkDataType.isRegExp(TRUE)).toEqual(false);
    expect(checkDataType.isRegExp(FALSE)).toEqual(false);
    expect(checkDataType.isRegExp(UNDEFINED)).toEqual(false);
    expect(checkDataType.isRegExp(NULL)).toEqual(false);
    expect(checkDataType.isRegExp(SYMBOL)).toEqual(false);
    expect(checkDataType.isRegExp(OBJECT)).toEqual(false);
    expect(checkDataType.isRegExp(ARRAY)).toEqual(false);
    expect(checkDataType.isRegExp(DATE)).toEqual(false);
    expect(checkDataType.isRegExp(REGEXP)).toEqual(true);
    expect(checkDataType.isRegExp(FUNCTION)).toEqual(false);
    expect(checkDataType.isRegExp(ERROR)).toEqual(false);
  });

  test('10 测试 FUNCTION 数据类型', () => {
    expect(checkDataType.isFunction(NUMBER)).toEqual(false);
    expect(checkDataType.isFunction(STRING)).toEqual(false);
    expect(checkDataType.isFunction(TRUE)).toEqual(false);
    expect(checkDataType.isFunction(FALSE)).toEqual(false);
    expect(checkDataType.isFunction(UNDEFINED)).toEqual(false);
    expect(checkDataType.isFunction(NULL)).toEqual(false);
    expect(checkDataType.isFunction(SYMBOL)).toEqual(false);
    expect(checkDataType.isFunction(OBJECT)).toEqual(false);
    expect(checkDataType.isFunction(ARRAY)).toEqual(false);
    expect(checkDataType.isFunction(DATE)).toEqual(false);
    expect(checkDataType.isFunction(REGEXP)).toEqual(false);
    expect(checkDataType.isFunction(FUNCTION)).toEqual(true);
    expect(checkDataType.isFunction(ERROR)).toEqual(false);
  });

  test('11 测试 ERROR 数据类型', () => {
    expect(checkDataType.isError(NUMBER)).toEqual(false);
    expect(checkDataType.isError(STRING)).toEqual(false);
    expect(checkDataType.isError(TRUE)).toEqual(false);
    expect(checkDataType.isError(FALSE)).toEqual(false);
    expect(checkDataType.isError(UNDEFINED)).toEqual(false);
    expect(checkDataType.isError(NULL)).toEqual(false);
    expect(checkDataType.isError(SYMBOL)).toEqual(false);
    expect(checkDataType.isError(OBJECT)).toEqual(false);
    expect(checkDataType.isError(ARRAY)).toEqual(false);
    expect(checkDataType.isError(DATE)).toEqual(false);
    expect(checkDataType.isError(REGEXP)).toEqual(false);
    expect(checkDataType.isError(FUNCTION)).toEqual(false);
    expect(checkDataType.isError(ERROR)).toEqual(true);
  });

});