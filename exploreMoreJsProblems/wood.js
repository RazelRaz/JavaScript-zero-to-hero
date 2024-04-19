/*
1. Chair = 3 cft
2. Table = 10 cft
3. Bed = 50 cft
*/

function furniture(chair,table,bed){

  const chairCft = 3;
  const tableCft = 10;
  const bedCft = 50;

  const chairRequired = chair * chairCft;
  const tableRequired = table * tableCft;
  const bedRequired = bed * bedCft;

  const total = chairRequired + tableRequired + bedRequired;

  return total;

}

const result = furniture(2,1,2);
console.log(result);
