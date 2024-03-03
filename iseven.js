function isEven(num){
    if(num % 2 == 0){
        return num + " is Even Number";
    }
    return num + " is Odd Number";
}

const evenNumber = 149;
const anotherNumber = 46;
const result = isEven(evenNumber);
const result2 = isEven(anotherNumber)
console.log(result);
console.log(result2);
