const eqArrays = (array1,array2) => {
    for (let i = 0; i < array1.length; i++) {
        if (array1[i] !== array2[i] || array1.length !== array2.length) {
            return false;
            break;
        } 
    }
    return true;
}


module.exports = eqArrays;


