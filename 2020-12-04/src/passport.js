function passport(input) {
  if (
    input.includes("byr") &&
    input.includes("iyr") &&
    input.includes("eyr") &&
    input.includes("hgt") &&
    input.includes("hcl") &&
    input.includes("ecl") &&
    input.includes("pid")
  ) {
    return true;
  }
  
  return false;
}
module.exports = passport;