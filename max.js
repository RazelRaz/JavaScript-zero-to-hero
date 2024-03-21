const max = 96;
const jim = 67;
const den = 78;

function getMax(par1,par2,par3) {
    if(par1 > par2 && par1 > par3){
        return par1;
    } else if (par2 > par1 && par2 > par3) {
      return par2;
    } else {
      return par3;
    }
}

const checkMax = getMax(max,jim,den);
console.log(checkMax);

