const CustomError = require("../extensions/custom-error");

const chainMaker = {
  array: [],

  getLength() {
    return this.array.length
  },
  addLink(value) {
    this.array.push(value);
    return this;
  },
  removeLink(position) {
    if (position <= 0 || typeof position !== 'number' || position > this.array.length) {
      this.array = [];
      throw new Error('THROWN');
    }
    this.array.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.array.reverse();
    return this;

  },
  finishChain() {
    let result = '';
    for (let i = 0; i < this.array.length; i++) {
      if (i === 0) {
        result = result + '( ' + this.array[i] + ' )'
      } else {
        result = result + '~~' + '( ' + this.array[i] + ' )'
      }
    }
    this.array = [];
    return result;
  }
};

module.exports = chainMaker;
