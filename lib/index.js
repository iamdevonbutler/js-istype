module.exports = (obj, type) => {
  var tag;
  switch (type) {
    case 'string':
      return typeof obj === 'string';
    case 'number':
      return typeof obj === 'number' && Number.isNaN(obj) === false;
    case 'boolean':
      return obj === true || obj === false;
    case 'array':
      return Array.isArray(obj);
    case 'object':
      tag = Object.prototype.toString.call(obj);
      return typeof obj === 'object' && obj !== null && Array.isArray(obj) === false && !(obj instanceof Date) && tag !== '[object Error]';
    case 'null':
      return obj === null;
    case 'undefined':
      return obj === undefined;
    case 'function':
      tag = Object.prototype.toString.call(obj);
      return tag === '[object Function]' || tag === '[object AsyncFunction]' || tag === '[object GeneratorFunction]' || tag === '[object Proxy]';
    case 'error':
      tag = Object.prototype.toString.call(obj);
      return tag === '[object Error]';
    case 'symbol':
      return typeof obj === 'symbol';
    case 'NaN':
      return Number.isNaN(obj);
    case 'date':
      return obj instanceof Date;
    default:
      throw new Error(`Unrecgonized type: "${type}"`);
  }
};
