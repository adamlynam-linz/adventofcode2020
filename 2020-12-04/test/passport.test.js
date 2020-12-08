const passport = require('../src/passport');
const validator = require('../src/passportvalid');
const parser = require('../src/passportparser');

test('test case 1', () => {
  const data = "ecl:gry pid:860033327 eyr:2020 hcl:#fffffd\nbyr:1937 iyr:2017 cid:147 hgt:183cm"
  expect(passport(data)).toBe(true);
});

test('test case 2', () => {
  const data = "iyr:2013 ecl:amb cid:350 eyr:2023 pid:028048884\nhcl:#cfa07d byr:1929"
  expect(passport(data)).toBe(false);
});

test('test case 3', () => {
  const data = "hcl:#ae17e1 iyr:2013\neyr:2024\necl:brn pid:760753108 byr:1931\nhgt:179cm"
  expect(passport(data)).toBe(true);
});

test('test case 4', () => {
  const data = "hcl:#cfa07d eyr:2025 pid:166559648\niyr:2011 ecl:brn hgt:59in"
  expect(passport(data)).toBe(false);
});

test('test input part 1', () => {
  fs = require('fs');
  fs.readFile('test-input', 'utf8', function (err,data) {
    if (err) throw err;
    expect(parser(data, passport)).toBe(2);
  });
});

test('real input part 1', () => {
  fs = require('fs');
  fs.readFile('input', 'utf8', function (err,data) {
    if (err) throw err;
    expect(parser(data, passport)).toBe(210);
  });
});

test('my test case good', () => {
  const data = "ecl:gry pid:860033327 eyr:2020 hcl:#fffffd\nbyr:1920 iyr:2017 cid:147 hgt:183cm"
  expect(validator(data)).toBe(true);
});

test('my test case birthyear', () => {
  const data = "ecl:gry pid:860033327 eyr:2020 hcl:#fffffd\nbyr:1900 iyr:2017 cid:147 hgt:183cm"
  expect(validator(data)).toBe(false);
});

test('my test case issueyear', () => {
  const data = "ecl:gry pid:860033327 eyr:2020 hcl:#fffffd\nbyr:1920 iyr:2009 cid:147 hgt:183cm"
  expect(validator(data)).toBe(false);
});

test('my test case expiryyear', () => {
  const data = "ecl:gry pid:860033327 eyr:2019 hcl:#fffffd\nbyr:1920 iyr:2017 cid:147 hgt:183cm"
  expect(validator(data)).toBe(false);
});

test('my test case height', () => {
  const data = "ecl:gry pid:860033327 eyr:2020 hcl:#fffffd\nbyr:1920 iyr:2017 cid:147 hgt:183bm"
  expect(validator(data)).toBe(false);
});

test('my test case height cm', () => {
  const data = "ecl:gry pid:860033327 eyr:2020 hcl:#fffffd\nbyr:1920 iyr:2017 cid:147 hgt:140cm"
  expect(validator(data)).toBe(false);
});

test('my test case height in', () => {
  const data = "ecl:gry pid:860033327 eyr:2020 hcl:#fffffd\nbyr:1920 iyr:2017 cid:147 hgt:50in"
  expect(validator(data)).toBe(false);
});

test('my test case hair', () => {
  const data = "ecl:gry pid:860033327 eyr:2020 hcl:#gggggg\nbyr:1920 iyr:2017 cid:147 hgt:183cm"
  expect(validator(data)).toBe(false);
});

test('my test case eye', () => {
  const data = "ecl:yes pid:860033327 eyr:2020 hcl:#fffffd\nbyr:1920 iyr:2017 cid:147 hgt:183cm"
  expect(validator(data)).toBe(false);
});

test('my test case passportid', () => {
  const data = "ecl:gry pid:86003332788 eyr:2020 hcl:#fffffd\nbyr:1920 iyr:2017 cid:147 hgt:183cm"
  expect(validator(data)).toBe(false);
});

test('real input part 2', () => {
  fs = require('fs');
  fs.readFile('input', 'utf8', function (err,data) {
    if (err) throw err;
    expect(parser(data, validator)).toBe(131);
  });
});