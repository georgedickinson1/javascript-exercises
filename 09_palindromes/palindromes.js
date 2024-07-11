const palindromes = function (word) {
    word = word.replace(/[., \/#!$%\^&\*;:{}=\-_`~()]/g,"").toLowerCase();
    if (word === word.split("").reverse().join("")) {
        return true;
    } else {
        return false;
    }
};


// Do not edit below this line
module.exports = palindromes;
