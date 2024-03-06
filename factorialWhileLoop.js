function factorialWhileLoop(number){
    let num = 1;
    let result = 1;
    while (num <= number) {
        result = result * num
        num++
    }
    return result
}

const digit = 6;
const result = factorialWhileLoop(digit);
console.log(result);