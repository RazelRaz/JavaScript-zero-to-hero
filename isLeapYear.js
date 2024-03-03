function isLeapYear(year){
    const calc = year % 4;
    if(calc === 0) {
        return year + " is a leap Year"
    }
    return "Not A Leap year";
}

const result = isLeapYear(2021);
console.log(result);