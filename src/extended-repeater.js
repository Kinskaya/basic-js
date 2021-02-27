const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let part;
  let connectPart;
  let result = '';
  let separator = '+';
  let additionSeparator = '|';

  if (Object.keys(options).length === 1 && options.repeatTimes) {
    part = (str + separator).repeat(options.repeatTimes - 1) + str;
    result = result + part;
  } else if (Object.keys(options).length === 2 && options.separator) {
    part = (str + options.separator).repeat(options.repeatTimes - 1) + str;
    result = result + part
  }
  else if (options.additionSeparator === undefined && options.separator === undefined) {
    part = (str + (options.addition + additionSeparator).repeat(options.additionRepeatTimes - 1)) + options.addition;
    connectPart = (part + separator).repeat(options.repeatTimes - 1)
    result = result + connectPart + part;
  } else if (options.additionSeparator === undefined) {
    part = (str + (options.addition + additionSeparator).repeat(options.additionRepeatTimes - 1)) + options.addition;
    connectPart = (part + options.separator).repeat(options.repeatTimes - 1);
    result = result + connectPart + part;
  } else if (options.separator === undefined) {
    part = (str + (options.addition + options.additionSeparator).repeat(options.additionRepeatTimes - 1)) + options.addition;
    connectPart = (part + separator).repeat(options.repeatTimes - 1);
    result = result + connectPart + part;
  }
  else if (options.addition === undefined) {
    part = (str + options.separator).repeat(options.repeatTimes - 1) + str;
    result = result + part;
  }
  else if ((options.repeatTimes || options.repeatTimes === undefined) && options.separator && String(options.addition) && (options.additionRepeatTimes || options.additionRepeatTimes === undefined)) {
    part = (str + (options.addition + options.additionSeparator).repeat(options.additionRepeatTimes - 1)) + options.addition;
    connectPart = (part + options.separator).repeat(options.repeatTimes - 1)
    result = result + connectPart + part;
  } else if (options.separator === undefined) {
    part = (str + separator).repeat(options.repeatTimes - 1) + str;
    result = result + part;
  } else {
    part = (str + options.separator).repeat(options.repeatTimes - 1) + str;
    result = result + part
  }
  return result;
};
  