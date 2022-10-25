const takeUntil = function(array, callback) {
  //return a slice of the array with elements taken from the beginning.
  // until callback returns a truthy value
  const output = [];
  for (const element of array) {
    if (!callback(element)) {
      output.push(element);
    } else {
      break;
    }
  }
  return output;
};

module.exports = takeUntil;

