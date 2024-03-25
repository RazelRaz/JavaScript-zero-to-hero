// reverse a word

function wordRevrse(text){
    const word = text.split(" ");
    // console.log(word);
    // [ 'How', 'Are', 'You' ]
    const newReversedWord = [];
    for (let i = word.length - 1; i >= 0; i--) {
      const index = i;
      const elements = word[index];
      newReversedWord.push(elements)
    }
    // console.log(newReversedWord);
    const newLine = newReversedWord.join(" ");
    return newLine;
    
}

const sentence = "How Are You";
const result = wordRevrse(sentence);
console.log(result);

