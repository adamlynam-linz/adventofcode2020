const accounts = require('../src/accounts');
const accountsthree = require('../src/accountsthree');

test('test case 1', () => {
  expect(accounts([
      "1721",
      "979",
      "366",
      "299",
      "675",
      "1456"
    ])).toBe(514579);
});

test('test case 2', () => {
  expect(accountsthree([
      "1721",
      "979",
      "366",
      "299",
      "675",
      "1456"
    ])).toBe(241861950);
});

test('real answer 1', () => {
  fs = require('fs');
  fs.readFile('input', 'utf8', function (err,data) {
    if (err) throw err;
    expect(accounts(data.split("\n"))).toBe(898299);
  });
});

test('real answer 2', () => {
  fs = require('fs');
  fs.readFile('input', 'utf8', function (err,data) {
    if (err) throw err;
    expect(accountsthree(data.split("\n"))).toBe(143933922);
  });
});