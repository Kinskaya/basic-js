const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {

  calculateDepth(arr) {
    this.arr = arr;
    function check(arr) {
      return 1 + (Array.isArray(arr) ? arr.reduce(function(max, item) {
        return Math.max(max, check(item));
      }, 0) : -1);
    }
    return check(this.arr);
  }
}