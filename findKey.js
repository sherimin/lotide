const findKey = function (object,callback) {

    let keyInObject = Object.keys(object);

    for (const item of keyInObject) {
        if (callback(object[item])) {
            return item;
        }
    }
};

//Test Code Below

const assertEqual = function(actual, expected) {
    if (actual === expected) {
        console.log(`✅✅✅ Assertion Passed: ${actual}  === ${expected}`);
    } else {
        console.log(`🛑🛑🛑 Assertion Failed:  ${actual}  !== ${expected}`);
    }
};

const testResult = findKey({
    "Blue Hill": { stars: 1 },
    "Akaleri":   { stars: 3 },
    "noma":      { stars: 2 },
    "elBulli":   { stars: 3 },
    "Ora":       { stars: 2 },
    "Akelarre":  { stars: 3 }
  }, x => x.stars === 2) // => "noma"

assertEqual(testResult,"noma")

module.exports = findKey;





