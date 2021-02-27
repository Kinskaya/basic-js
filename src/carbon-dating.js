const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  let age;
  const halfLife = 5730;
  const modernActivity = 15;

  if (typeof sampleActivity !== 'string' || /[A-Z, a-z]/.test(sampleActivity) || sampleActivity === ''
      ||  sampleActivity >= modernActivity || sampleActivity <= 0) {
    return false;
  }
  age = Math.ceil(Math.log(modernActivity/sampleActivity) / (Math.log(2) / halfLife));
  return age;
};
