//how to get a largest number from an array

function checkTallest(numbers) {

  let largest = numbers[0];
  for (let i = 0; i < numbers.length; i++) {
    const index = i;
    const element = numbers[index];
    // console.log(element);
    if (element > largest) {
      largest = element;
    }
    
  }
  return largest;
  
}


const heights = [123,45,345,234,111,324];
const result = checkTallest(heights);
console.log(result);


