
const letterPositions = function(sentence) {
    const results = {};
    // logic to update results here

    //space doesn't count
    sentence = sentence.replace(' ','');

    //iterate through the sentence
    for (let i = 0; i < sentence.length; i++) {
        if (results[sentence[i]]) {
            //if the same letter occurs, push its index to "results"
            results[sentence[i]].push(i);
        } else {
            results[sentence[i]] = [i]
        }
    }
    return results;
  };

//test code below

// const assertArraysEqual = (array1,array2) => {
//     for (let i = 0; i < array1.length; i++) {
//         if (array1[i] !== array2[i] || array1.length !== array2.length) {
//             console.log(`🛑🛑🛑 Assertion Failed:  ${array1}  !== ${array2}`);
//             break;
//         } 
//     }
//     console.log(`✅✅✅ Assertion Passed: ${array1}  === ${array2}`);;
// };



// testCode = letterPositions("hello");

// assertArraysEqual(testCode["h"], [0])
// assertArraysEqual(testCode["e"],[1])
// assertArraysEqual(testCode["l"], [2, 3])
// assertArraysEqual(testCode["o"], [4])

module.exports = letterPositions;


