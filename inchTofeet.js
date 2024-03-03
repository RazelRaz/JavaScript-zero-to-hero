function inchTofeetCalc(inputInch){
    const calc = inputInch / 12;
    return calc;
}

const inch = 168;

const res = inchTofeetCalc(inch);
const shortNum = res.toFixed(3)
console.log(shortNum);

