// find leap year from an array

function findLeapYear(arr){
    let box = [];
    for(let i = 0; i < arr.length; i++){
        const index = i;
        const elements = arr[index];
        if(elements % 2 === 0){
            box.push(elements)
        }
    }
    return box;
}

const arr = [2023,2024,2025,2028,2030];
const result = findLeapYear(arr);
console.log(result);
