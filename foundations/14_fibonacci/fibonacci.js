const fibonacci = function(num) {
    if(Number(num) < 0){
        return "OOPS";
    } else {
        num = Number(num);
        let fiboArr = [0, 1];
        for(let i = 1; i < num; i++){
            fiboArr.push(fiboArr[i-1]+fiboArr[i]);
        }
        return fiboArr[num];
    }
};

// Do not edit below this line
module.exports = fibonacci;
