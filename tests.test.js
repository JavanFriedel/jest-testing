const functions = require('./index.js');

const capitalize = functions.capitalize;
const reverseString = functions.reverseString;
const calculator = functions.calculator;
const caesarCipher = functions.caesarCipher;
const analyzeArray = functions.analyzeArray;

// analyzeArray,

test('Capitalize: javan should equal Javan', () => {
  expect(capitalize('javan')).toBe('Javan');
});

test('Capitalize: big should equal Big', () => {
  expect(capitalize('big')).toBe('Big');
});

test('Reverse String: Dog should equal goD', () => {
  expect(reverseString('Dog')).toBe('goD');
});

test('Reverse String: reverse should equal esrever', () => {
  expect(reverseString('reverse')).toBe('esrever');
});

test('Calculator: Dog should equal goD', () => {
  expect(calculator().subtract(3, 1)).toBe(2);
});

test('Calculator: Dog should equal goD', () => {
  expect(calculator().divide(4, 2)).toBe(2);
});

test('Calculator: Dog should equal goD', () => {
  expect(calculator().multiply(5, 5)).toBe(25);
});

test('Cipher: Small Codes with no wrapping', () => {
  expect(caesarCipher('abcde', 1)).toBe('bcdef');
});

test('Cipher: Long with no wrapping', () => {
  expect(caesarCipher('abcdefghijklmnopqrstuvwxy', 1)).toBe(
    'bcdefghijklmnopqrstuvwxyz'
  );
});

test('Analyze Array: [1,8,3,4,2,6]', () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});
