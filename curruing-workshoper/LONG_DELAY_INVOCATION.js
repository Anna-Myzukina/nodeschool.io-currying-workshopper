var sum = 0;
function func(argFirst) {
  if (argFirst === undefined) {
    var result = sum;
    sum = null;
    return result;
  } else {
    sum += argFirst;
    return func;
  }
};

module.exports = func;


/*function longDelay(arg) {
    var sum = 0;
  if (arg === undefined) {
    var result = sum;
    sum = null;
    return result;
  }
  total += arg;
  return longDelay;
}

module.exports = longDelay;*/