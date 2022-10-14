const eqObjects = function(object1, object2) {
    //compare the number of keys in each object
    if (Object.keys(object1).length !== Object.keys(object2).length) {
        return false;
    } else {
        //check if any of the value is an array
        for (const eachKey of Object.keys(object1)) {
            if (Array.isArray(object1[eachKey]) && Array.isArray(object2[eachKey])) {
                for (let i = 0; i < object1[eachKey].length; i++) {
                    if (object1[eachKey].length !== object2[eachKey].length || object1[eachKey][i] !== object2[eachKey][i]) {
                        return false;
                    }
                }
                //compare each value (if not array)
            } else if (object1[eachKey] !== object2[eachKey]) {
                return false;
            }
        }
        return true;
    }
};

const assertObjectsEqual = function(actual, expected) {
    // Implement me!
    const inspect = require('util').inspect;
    if (eqObjects(actual, expected)) {
        console.log(`✅✅✅ Assertion Passed: ${inspect(actual)}  === ${inspect(expected)}`)
    } else {
        console.log(`🛑🛑🛑 Assertion Failed:  ${inspect(actual)} !== ${inspect(expected)}`)
    }
  };

//Test code below

// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// const cd2 = { c: "1", d: ["2", 3, 4] };

// assertObjectsEqual(cd,dc);
// assertObjectsEqual(cd,cd2);

module.exports = assertObjectsEqual;

