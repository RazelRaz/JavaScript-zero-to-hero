// return the result in minutes
//  hour X 60

function resultInmints(hour){
    const myhour = hour * 60;
    return myhour;
}

const inputHour = 1;
const result = resultInmints(inputHour);
console.log(result);