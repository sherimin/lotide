const findKeyByValue = (inputObject, value) => {

  let keyInObject = Object.keys(inputObject);

  for (const eachKey of keyInObject) {
    if (inputObject[eachKey] === value) {
      return eachKey;
    }
  }
};



module.exports = findKeyByValue;