
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
      results[sentence[i]] = [i];
    }
  }
  return results;
};


module.exports = letterPositions;


