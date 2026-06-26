const leapYears = function(year) {
    if(year % 4 === 0 && (year % 100 != 0 || year % 400 === 0)){
        console.log("is a leap year: returns true")
        return true;
    } else {
        console.log("is not a leap year: returns false")
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
