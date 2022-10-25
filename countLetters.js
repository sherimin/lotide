const countLetters = (sentence) => {
  let result = {};

  //space doesn't count
  sentence = sentence.replace(' ','');


  //loop through the given array and count letters
  for (const element of sentence) {
    if (!result[element]) {
      result[element] = 1;
    } else {
      result[element]++;
    }
  }
  return result;
};


module.exports = countLetters;





