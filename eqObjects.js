const assertEqual = function(actual, expected) {
    if (actual === expected) {
        console.log(`✅✅✅ Assertion Passed: ${actual}  === ${expected}`);
    } else {
        console.log(`🛑🛑🛑 Assertion Failed:  ${actual}  !== ${expected}`);
    }
};




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

//TEST CODE BELOW

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(eqObjects(cd, dc)); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(eqObjects(cd, cd2)); // => false

module.exports = eqObjects;