function parser(input, validator) {
    const passports = input.split("\n\n");
    // console.log(passports);
    return passports.reduce((validcount, passportdata) => {
        if (validator(passportdata)) {
            return validcount + 1;
        }
        
        return validcount;
    }, 0);
  }
  module.exports = parser;