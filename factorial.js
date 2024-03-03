function getFactorial(number){
    let num = 1;
    for(let i = number; i >= 1; i--){
        // console.log(i);
         num = num * i;
    }
    return num
}

const digit = 6;
const result = getFactorial(digit);
console.log(result);
