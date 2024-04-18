const bucket = ["apple","banana","banana","orange","pineapple","apple","litchi","strawberry","apple"];

function removerDuplicateFruits(bucketFruits){
  const newArray = [];
  for (let i = 0; i < bucketFruits.length; i++) {
    const fruit = bucketFruits[i];
    console.log(fruit);
    if(newArray.includes(fruit) === false){
      newArray.push(fruit);
    }
  }
  return newArray;
}

const mainFruits = removerDuplicateFruits(bucket);
console.log(mainFruits);







