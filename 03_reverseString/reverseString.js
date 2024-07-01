const reverseString = function(inputString) {
    let outputString = "";
    for (let i = inputString.length - 1; i >= 0; i--) {
        console.log(i);
        outputString += inputString.charAt(i);
    }
    return outputString;
};

console.log(reverseString("Hello"))

// Do not edit below this line
module.exports = reverseString;
