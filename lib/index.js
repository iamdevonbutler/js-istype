module.exports = (obj, type) => {
  if (type === 'string') {
    return typeof obj === 'string';
  }
  if (type === 'number') {
    return typeof obj === 'number' && Number.isNaN(obj) === false;
  }
  if (type === 'boolean') {
    return obj === true || obj === false;
  }
  if (type === 'array') {
    return Array.isArray(obj);
  }
  if (type === 'object') {
    let tag = Object.prototype.toString.call(obj);
    return typeof obj === 'object' && obj !== null && Array.isArray(obj) === false && !(obj instanceof Date) && tag !== '[object Error]';
  }
  if (type === 'null') {
    return obj === null;
  }
  if (type === 'undefined') {
    return obj === undefined;
  }
  if (type === 'function') {
    let tag = Object.prototype.toString.call(obj);
    return tag === '[object Function]' || tag === '[object AsyncFunction]' || tag === '[object GeneratorFunction]' || tag === '[object Proxy]';
  }
  if (type === 'date') {
    return obj instanceof Date;
  }
  if (type === 'error') {
    let tag = Object.prototype.toString.call(obj);
    return tag === '[object Error]';
  }
  if (type === 'symbol') {
    return typeof obj === 'symbol';
  }
  if (type === 'NaN') {
    return Number.isNaN(obj);
  }
  throw new Error(`Unrecgonized type: "${type}"`);
};
