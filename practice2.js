// function make_avg(int1,int2,int3){
//     var bucket = int1 + int2 + int3
//     var calc = bucket / 3;
//     return calc;
// }

// const allvals = make_avg(33,33,39);
// console.log(allvals);
// japoke6023@ebuthor.com

function make_avg(arr){
   var newArr = arr.reduce((prevVal, currVal) => {
        return prevVal + currVal;
    },0)

    return newArr / arr.length;
}

var box = [89,37,45,89,71];
var mainTotal = make_avg(box);
console.log(mainTotal);

