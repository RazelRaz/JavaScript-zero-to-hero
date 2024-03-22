function largestNumber(numbers){
  let largest = numbers[0]
  for (let i = 0; i < numbers.length; i++) {
    const index = i;
    const elements = numbers[index];
    // console.log(elements);
    if(elements > largest){
      largest = elements;
    }
  }
  return largest;
  
}

const numbers = [22,45,34,97,45,87,45,34,7];
const checkNumbers = largestNumber(numbers);
console.log(checkNumbers);
