// search a word from string

const sentence = "A quick Brown FOX, jums over the lazy doG";
const search = "Dog";


const checkSen = sentence.toLowerCase();
const checkSer = search.toLowerCase();


const findWord = checkSen.includes(checkSer);
console.log(findWord);