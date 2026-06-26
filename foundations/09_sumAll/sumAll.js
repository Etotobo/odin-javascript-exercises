const sumAll = function(a, b) {
    if(a === b){
        return a ;
    }else if(
        a < 0 || 
        b < 0 || 
        typeof a != 'number' || 
        typeof b != 'number' || 
        Number(a) % 1 != 0 || 
        Number(b) % 1 != 0
    ){
        return "ERROR";
    }else{
        let smallerNum = a < b ? a : b;
        let biggerNum =  a > b ? a : b;
        let arr = [smallerNum];
        for(let i = smallerNum; i <= biggerNum - 1; i++){
            arr.push(++smallerNum);
            console.log(arr);
        }
        return arr.reduce((acc, num) => acc + num, 0);
    }       

};

// Do not edit below this line
module.exports = sumAll;
