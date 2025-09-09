// Deep comparison helper
function deepEqual(a, b) {
  if (a === b) return true;

  if (typeof a !== typeof b || a === null || b === null) return false;

  if (Array.isArray(a) && Array.isArray(b)) {
    if (a.length !== b.length) return false;
    return a.every((el, i) => deepEqual(el, b[i]));
  }

  if (typeof a === 'object' && typeof b === 'object') {
    const aKeys = Object.keys(a);
    const bKeys = Object.keys(b);
    if (aKeys.length !== bKeys.length) return false;
    return aKeys.every(key => b.hasOwnProperty(key) && deepEqual(a[key], b[key]));
  }

  return false;
}

// Define includesOneOf on Array prototype
Array.prototype.includesOneof = function (items) {
  if (!Array.isArray(items) || items.length === 0) return false;

  return items.some(item =>
    this.some(element => deepEqual(item, element))
  );
};
