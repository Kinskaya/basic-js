const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  let arrNew = [];
  if (Array.isArray(arr) !== true) {
    throw 'Error';
  } else if (arr.length === 0) {
    return arrNew;
  }
  for (let i = 0; i < arr.length; i++) {
    arrNew.push(arr[i]);
  }
  for (let i = 0; i < arrNew.length; i++) {
    if (arrNew[i] === '--double-next') {
      if (i < arrNew.length - 1) {
        arrNew[i] = arrNew[i + 1];
      }
    } else if (arrNew[i] === '--discard-next') {
      if (i < arrNew.length - 1) {
        arrNew[i + 1] = "SSSS";
      }
    } else if (arrNew[i] === '--double-prev') {
      if (i !== 0 && arrNew[i - 1] !== "SSSS") {
        arrNew[i] = arrNew[i - 1];
      }
    } else if (arrNew[i] === '--discard-prev') {
      if (i !== 0 && arrNew[i - 1] !== "SSSS") {
        arrNew[i - 1] = "SSSS";
      }
    }
  }
  let arrNew2 = [];
  for (let i = 0; i < arrNew.length; i++) {
    if (arrNew[i] !== "SSSS" && arrNew[i] !== "--double-next" && arrNew[i] !== "--discard-next" && arrNew[i] !== "--double-prev" && arrNew[i] !== "--discard-prev") {
      arrNew2.push(arrNew[i]);
    }
  }

  return arrNew2;
};
