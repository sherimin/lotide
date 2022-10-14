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
  }


  //Test Code Below
//   const assertArraysEqual = (array1,array2) => {
//     for (let i = 0; i < array1.length; i++) {
//         if (array1[i] !== array2[i] || array1.length !== array2.length) {
//             console.log(`🛑🛑🛑 Assertion Failed:  ${array1}  !== ${array2}`);
//             break;
//         } 
//     }
//     console.log(`✅✅✅ Assertion Passed: ${array1}  === ${array2}`);;
// };

// const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
// const results1 = takeUntil(data1, x => x < 0);

// assertArraysEqual(results1,[ 1, 2, 5, 7, 2 ])

// console.log('---');

// const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
// const results2 = takeUntil(data2, x => x === ',');

// assertArraysEqual(results2,[ 'I\'ve', 'been', 'to', 'Hollywood' ])

module.exports = takeUntil;

