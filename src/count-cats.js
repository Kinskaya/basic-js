const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let arr = matrix.reduce(function (a, b) {
    return a.concat(b);
  }, []);
  let count = 0;
  for (i = 0; i < arr.length; i++) {
    if (arr[i] === '^^') {
      count = count + 1;
    }
  }
  if (count === 0) {
    return 0;
  } else {
    return count;
  }
};
