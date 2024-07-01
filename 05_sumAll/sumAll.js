const sumAll = function(numberOne, numberTwo) {
    if (typeof numberOne != "number" || typeof numberTwo != "number") {
        return "ERROR";
    } 
    let finalSum = 0;
    if (numberOne < numberTwo) {
        for (numberOne; numberOne <= numberTwo; numberOne++) {
            finalSum += numberOne;
        };
    } else {
        for (numberTwo; numberTwo <= numberOne; numberTwo++) {
            finalSum += numberTwo;
        };
    };
    if (finalSum > 0) {
        return finalSum;
    } else {
        return "ERROR";
    }
};

console.log(sumAll(1, "10"))

// Do not edit below this line
module.exports = sumAll;
