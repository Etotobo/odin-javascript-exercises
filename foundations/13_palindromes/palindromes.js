 const palindromes = function (str) {
    const strArr = str.toLowerCase().split("").filter(item => /[a-zA-Z0-9]/.test(item));
    const firstPart = strArr.slice(0,(strArr.length)/2 + 1).join("");
    const lastPart = strArr.slice((strArr.length)/2).reverse().join("");
    return firstPart === lastPart;
};

// Do not edit below this line
module.exports = palindromes;
