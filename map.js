const words = ["ground", "control", "to", "major", "sakura"];

const map = function (array,callback) {
    const results = [];
    for (let item of array) {
        results.push(callback(item));
    }
    return results;
};

const results1 = map(words, word => word[0]);
console.log(results1);

//Test code below

// const assertArraysEqual = (array1,array2) => {
//     for (let i = 0; i < array1.length; i++) {
//         if (array1[i] !== array2[i] || array1.length !== array2.length) {
//             console.log(`🛑🛑🛑 Assertion Failed:  ${array1}  !== ${array2}`);
//             break;
//         } 
//     }
//     console.log(`✅✅✅ Assertion Passed: ${array1}  === ${array2}`);;
// };

// assertArraysEqual(results1,[ 'g', 'c', 't', 'm', 's' ]);

module.exports = map;

