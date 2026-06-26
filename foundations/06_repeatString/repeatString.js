const repeatString = function(string, num) {
    let newString = "";
    if(num < 0){
        newString = "ERROR";
    }else{
        let i = 1;
        while(i <= num){
            newString += string;
            i++;
        }
    }
    return newString;
};

// Do not edit below this line
module.exports = repeatString;
