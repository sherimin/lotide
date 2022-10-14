const findKeyByValue = (inputObject, value) => {

    let keyInObject = Object.keys(inputObject);

    for (const eachKey of keyInObject) {
      if (inputObject[eachKey] === value) {
        return eachKey;
      } 
    }
};

//Test Code

// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//       console.log(`✅✅✅ Assertion Passed: ${actual}  === ${expected}`);
//   } else {
//       console.log(`🛑🛑🛑 Assertion Failed:  ${actual}  !== ${expected}`);
//   }
// };


// const bestTVShowsByGenre = { 
//     sci_fi: "The Expanse",
//     comedy: "Brooklyn Nine-Nine",
//     drama:  "The Wire"
//   };
  
//   assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
//   assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

  module.exports = findKeyByValue;