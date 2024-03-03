

function milesTokm(miles){
    const userData = miles * 1.6;
    return userData;
}

const userMiles = 100;
const calculation = milesTokm(userMiles);
console.log(calculation,"km");