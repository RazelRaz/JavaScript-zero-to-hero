const rhym = "A quick brown fox, jumos over the lazy dog";
const part1 = rhym.split(",");
const part2 = rhym.split(" ")
const chars = rhym.split('')
// console.log(chars);


const mySlice = rhym.slice(2,6);
// console.log(mySlice);
// console.log(rhym);

const mysubSTR = rhym.substring(3,7);
// console.log(mysubSTR);

const myline = [
  'A', ' ', 'q', 'u', 'i', 'c', 'k',
  ' ', 'b', 'r', 'o', 'w', 'n', ' ',
  'f', 'o', 'x', ',', ' ', 'j', 'u',
  'm', 'o', 's', ' ', 'o', 'v', 'e',
  'r', ' ', 't', 'h', 'e', ' ', 'l',
  'a', 'z', 'y', ' ', 'd', 'o', 'g'
];

const createLine = myline.join("-");
console.log(createLine);
