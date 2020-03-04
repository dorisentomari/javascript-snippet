const toString = Object.prototype.toString;

export const isNumber = param => toString.call(param) === '[object Number]';

export const isString = param => toString.call(param) === '[object String]';

export const isBoolean = param => toString.call(param) === '[object Boolean]';

export const isUndefined = param => toString.call(param) === '[object Undefined]';

export const isNull = param => toString.call(param) === '[object Null]';

export const isSymbol = param => toString.call(param) === '[object Symbol]';

export const isObject = param => toString.call(param) === '[object Object]';

export const isArray = param => toString.call(param) === '[object Array]';

export const isDate = param => toString.call(param) === '[object Date]';

export const isRegExp = param => toString.call(param) === '[object RegExp]';

export const isFunction = param => toString.call(param) === '[object Function]';

export const isError = param => toString.call(param) === '[object Error]';

export const isPositiveNumber = param => isNumber(param) && param > 0;

export const isNegativeNumber = param => isNumber(param) && param < 0;

export const isEmptyObject = param => isObject(param) && Object.keys(param).length === 0;

// export const isHTMLDocument = param => toString.call(param) === '[object HTMLDocument]';
