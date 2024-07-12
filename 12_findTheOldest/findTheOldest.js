const findTheOldest = function(arrObj) {
    const currentYear = new Date().getFullYear();
    const newArr = arrObj.map(arr => {
      if (!arr.hasOwnProperty("yearOfDeath")) {
        arr.yearOfDeath = currentYear;
      }
      return arr;
    })
  
    const newArr2 = newArr.map((arr) => {
        return {
          ...arr,
          age: arr.yearOfDeath - arr.yearOfBirth
        }
    })
  
    newArr2.sort((a, b) => b.age - a.age);
    return newArr2[0];
  };
  
// Do not edit below this line
module.exports = findTheOldest;
