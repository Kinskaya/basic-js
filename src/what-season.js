const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (arguments.length < 1) {
    return 'Unable to determine the time of year!';
  }
  if (Object.prototype.toString.call(date) !== '[object Date]') {
    throw new Error('THROWN');
  }

  let timeOfYear;
  let month = date.getMonth();


  if (month === 11 || month === 0 || month === 1) {
    timeOfYear = 'winter';
  }
  if (month === 2 || month === 3 || month === 4) {
    timeOfYear = 'spring';
  }
  if (month === 5 || month === 6 || month === 7) {
    timeOfYear = 'summer';
  }
  if (month === 8 || month === 9 || month === 10) {
    timeOfYear = 'autumn';
  }
  return timeOfYear;
};
