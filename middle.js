const eqArrays = (array1,array2) => {
    for (let i = 0; i < array1.length; i++) {
        if (array1[i] !== array2[i] || array1.length !== array2.length) {
            return false;
            break;
        } 
    }
    return true;
}


const assertArrayEqual = (array1,array2) => {
    for (let i = 0; i < array1.length; i++) {
        if (array1[i] !== array2[i] || array1.length !== array2.length) {
            return "Assertion Failed";
            break;
        } 
    }
    return "Assertion Passed";
};


const middle = function(array) {
    if (array.length <= 2) {
      return [];
    } else if (array.length % 2 === 0) {
      return [(array[Math.floor(array.length / 2) - 1]), (array[Math.floor(array.length / 2)])];
    } else {
      return [array[Math.floor(array.length / 2)]];
    }
  };


  
