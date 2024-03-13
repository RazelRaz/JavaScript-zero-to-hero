const sentence = "A quick brown fox jumps over the lazy dog.";
const spaceParts = sentence.split(" ");
// console.log(spaceParts);

// divide charecters
const chars = sentence.split("");
// console.log(chars);

const sliceWork = sentence.slice(2,7);
console.log(sliceWork);
const substrWork = sentence.substring(2,7);
console.log(substrWork);

const aline = [
    'p', 's', ' ', 'o', 'v', 'e', 'r', 't', 'h', 'e', ' ', 'l', 'a',
  'z', 'y', ' ', 'd', 'o', 'g', '.'
]

const newLineCrt = aline.join("");
console.log(newLineCrt);