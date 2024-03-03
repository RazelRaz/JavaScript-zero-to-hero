function sumOfNumbers(number){
    let sum = 0;
    for(let i = 0; i < number; i++){
        const index = i;
        // console.log(index);
        sum = sum + index;
        // console.log(index, sum);
    }
    return sum;
}

const myNumb = sumOfNumbers(7);
console.log(myNumb);