const findKey = function(object,callback) {

  let keyInObject = Object.keys(object);

  for (const item of keyInObject) {
    if (callback(object[item])) {
      return item;
    }
  }
};



module.exports = findKey;





