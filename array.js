// const arr = ["cat","dog","elephant"]


// const knwIndex = "dog"
// const res = arr.indexOf(knwIndex);
// console.log(res);



// how to find a index value from an array of numbers

function findVal_func(arr,ind){
    for (let index = 0; index < arr.length; index++) {
        if(arr[index] === ind){
            return index;
        }
        
    }
}

var arr = [23,56,12,4,67];
var ind = 4;
var res = findVal_func(arr,ind);
console.log(res);
arr.push(344);
console.log(arr);

