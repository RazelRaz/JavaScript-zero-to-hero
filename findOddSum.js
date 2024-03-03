function findOddSum(arr){

        let sum = [];
        for(let i = 0; i < arr.length; i++){
            const index = i;
            const elements = arr[index]
            // console.log(index, elements);
            if(elements % 2 !== 0){
                sum.push(elements)
            }
        }
        return sum

}

const arrayBox = [2,3,7,6,86];
const res = findOddSum(arrayBox);
console.log(res);