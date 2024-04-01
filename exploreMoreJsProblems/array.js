const name = "BD";
const num = 12345;
const trueFalse = false;
const Oobj = {
  "name": "John",
  "age": "13"
}

const arr = ["rat","345","helo"];

console.log(typeof arr);

// check is array or not
console.log(Array.isArray(arr));

//is anything available  in array or not
console.log(arr.includes("helo"));


if(arr.indexOf("dddd") !== -1 ){
  console.log('AVaibale in the arrays');
} else {
  console.log('not in the array');
}

// concat 1 array to another
const humans = ["john","Rob"];
const newUmans = ["Jamal", "Saif", "Seja"];

const createNewArray = humans.concat(newUmans);
console.log(createNewArray);


