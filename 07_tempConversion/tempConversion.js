const convertToCelsius = function(temperature) {
  let rawNumber = (temperature - 32) / 1.8;
  return Math.round(rawNumber * 10) / 10;
};

const convertToFahrenheit = function(temperature) {
  let rawNumber = (temperature * 1.8) + 32;
  return Math.round(rawNumber * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
