
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
        newArray.push(array1[l]);
      }
    }
  }
  console.log(newArray);
};

module.exports = without;

