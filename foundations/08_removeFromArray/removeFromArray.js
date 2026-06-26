const removeFromArray = function(arr, ...nums) {
    return arr.filter(item => {
        for(num of nums){
            if(num === item) {
                return false 
            }else{
                continue;
            } 
        }
        return true;
    })
};

// Do not edit below this line
module.exports = removeFromArray;
