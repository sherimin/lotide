//The tail function takes in an array and return everything except the first array
const tail = (input) => {
  return input.slice(1,input.length);
  //return empty string for empty array or array with one element
};

module.exports = tail;
