function abc(fn) {
  var arr = fn.length;

  return function curried(...args) {
    if (args.length < arr) {
      return (...nextArgs) =>
        curried(...args, ...nextArgs);
    }

    return fn(...args)
  };
}

module.exports = abc;


