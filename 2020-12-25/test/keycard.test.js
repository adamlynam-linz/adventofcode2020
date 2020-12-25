const keycard = require('../src/keycard');

test('test input part 1', () => {
  expect(keycard('5764801', '17807724')).toBe('14897079');
});

test('real input part 1', () => {
  expect(keycard('9033205', '9281649')).toBe('9714832');
});