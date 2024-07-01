const removeFromArray = function(arr, ...removed) {
    return arr.filter(x => !removed.includes(x));
};

console.log(removeFromArray([1, 2, 3, 4], 3, 2))

// Do not edit below this line
module.exports = removeFromArray;
