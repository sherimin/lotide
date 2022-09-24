const eqArrays = (array1,array2) => {
    for (let i = 0; i < array1.length; i++) {
        if (array1[i] !== array2[i] || array1.length !== array2.length) {
            return "Assertion Failed";
            break;
        } 
    }
    return "Assertion Passed";
};

const without = (array1,array2) => {
    let newArray = [];
    let itemForRemoval = [];
    for (let i = 0; i < array1.length; i++) {
      for (let j = 0; j < array2.length; j++) {
        if (array1[i] === array2[j]) {
          itemForRemoval.push(array1[i]);
        }
      }
    }
    
    for (let k = 0; k < itemForRemoval.length; k++) {
      for (let l = 0; l < array1.length; l++) {
        if (itemForRemoval[k] === array1[l]) {
          continue;
        } else {
          newArray.push(array1[l])
        }
      }
    }

/*    for (var i = 0; i < array1.length; i++) {
        for (var j = 0; j < array2.length; j++)
        //compare each item in array1 and array2
        if (array1 [i] === array2 [j]) {
          //if any item in array2 is the same as an item in array1, then it needs to be removed
          break;
        } else {
          newArray.push(array1[i]);
          break;
        }
    }*/
    console.log(newArray);
}



without([1, 2, 3], [1]) // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]