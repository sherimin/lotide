const assertEqual = function(actual, expected) {
    if (actual === expected) {
        console.log(`✅✅✅ Assertion Passed: ${actual}  === ${expected}`);
    } else {
        console.log(`🛑🛑🛑 Assertion Failed:  ${actual}  !== ${expected}`);
    }
};


const tail = (input) => {
    let output = [];
    if (input.length === 1) {
        return output;
    } else {
        output = input.slice(1,input.length);
       return output;
    };
};
