const countOnly = (allItems, itemsToCount) => {
  //To count how many "itemsToCount" in "allItems"
  const results = {};

  for (const item of allItems) {
    console.log(item);
    //only keys with a truthy value would be counted
    if (itemsToCount[item]) {
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
  }
  return results;
};


module.exports = countOnly;