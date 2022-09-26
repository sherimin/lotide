const assertEqual = function(actual, expected) {
    if (actual === expected) {
        console.log(`✅✅✅ Assertion Passed: ${actual}  === ${expected}`);
    } else {
        console.log(`🛑🛑🛑 Assertion Failed:  ${actual}  !== ${expected}`);
    }
};



//only keys with a truthy value would be counted


const countOnly = (allItems, itemsToCount) => {
    //To count how many "itemsToCount" in "allItems"
    const results = {};

    for (const item of allItems) {
        console.log(item);

        if (itemsToCount[item]) {
            if (results[item]) {
                results[item] += 1;
            } else {
                results[item] = 1;
                //why results[item] equals to 1 here?
            }
        }

    }

    return results;
};


const firstNames = [
    "Karl",
    "Salima",
    "Agouhanna",
    "Fang",
    "Kavith",
    "Jason",
    "Salima",
    "Fang",
    "Joe"
  ];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);