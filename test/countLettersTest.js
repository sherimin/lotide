const assertEqual = require(`../assertEqual`)

const countLetters = require('../countLetters')


//test code below

const sentence1 = 'lighthouse vancouver';
const result1 = countLetters(sentence1);

assertEqual(result1['v'],2);
assertEqual(result1['z'],undefined);
assertEqual(result1['g'],1);