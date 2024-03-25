// string reverse with for loop / sentence reverse

function reversedtext(text){
  let reversed = "";
  for (let i = text.length-1; i >= 0; i--) {
    const index = i;
    const elements = text[index];
    // console.log(elements);
    reversed = reversed + elements
    console.log(elements, reversed);
  }
  return reversed
}

const aText = "A Quick Brown Fox";
const result = reversedtext(aText);
console.log("Reversed output: ",  result);

