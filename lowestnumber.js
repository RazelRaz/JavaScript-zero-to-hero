function lowestNumbers(numbers){
    let lowest = numbers[0]
    for (let i = 0; i < numbers.length; i++) {
      const index = i;
      const elements = numbers[index];
      // console.log(elements);
      if(elements < lowest){
        lowest = elements
      }
    }
    return lowest;
  
}

const numbersArray = [22,33,45,5,34,55,34];
const checkLowest = lowestNumbers(numbersArray);
console.log(checkLowest);