const assertEqual = function(actual, expected) {
    if (actual === expected) {
        console.log(`✅✅✅ Assertion Passed: ${actual}  === ${expected}`);
    } else {
        console.log(`🛑🛑🛑 Assertion Failed:  ${actual}  !== ${expected}`);
    }
};

const countLetters = (sentence) => {
    let result = {};

    //space doesn't count
    sentence = sentence.replace(' ','');


    //loop through the letters
    for (const element of sentence) {
        if (!result[element]) {
            result[element] = 1 ;
        } else {
            result[element]++ ;
        }
    }
    return result;
};


//test code below

const sentence1 = 'lighthouse vancouver';
const result1 = countLetters(sentence1);

assertEqual(result1['v'],2);
assertEqual(result1['z'],undefined);
assertEqual(result1['g'],1);

module.exports = countLetters;





