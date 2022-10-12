const assertArraysEqual = require('../assertArraysEqual')

//Test code
assertArraysEqual([1,2,3],[1,2,3])//pass
assertArraysEqual([1,2,'3'],[1,2,3])//fail
assertArraysEqual([1,2],[1,2,3])//fail