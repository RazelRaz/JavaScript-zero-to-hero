function multiplicationOfNumbers(num){
    let sum = 1;
    for(let i = 1; i <= num; i++){
        const index = i;
        // const element = num[index];
        sum = index * sum
    }
    return sum
}

const number = multiplicationOfNumbers(3);
console.log(number);