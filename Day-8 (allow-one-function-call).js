/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function (fn) {
    let result = null;
    return function (...args) {
        result = fn(...args);
        if (result.calls < 2) return result;

    }
};

/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */