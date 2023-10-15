function capitalize(string) {
  const stringSplit = string.split('');
  stringSplit[0] = stringSplit[0].toUpperCase();

  return stringSplit.join('');
}

function reverseString(string) {
  return string.split('').reverse().join('');
}

function calculator() {
  function subtract(num1, num2) {
    return num1 - num2;
  }

  function divide(num1, num2) {
    return num1 / num2;
  }

  function multiply(num1, num2) {
    return num1 * num2;
  }

  return {
    subtract,
    divide,
    multiply,
  };
}

function caesarCipher(string, offset) {
  const cipherArray = [];
  const originString = string.split('');

  for (let i = 0; i < originString.length; i++) {
    cipherArray.push(originString[i].charCodeAt(0) + offset);
  }

  return String.fromCharCode(...cipherArray);
}

function analyzeArray(array) {
  let min, max;
  const length = array.length;
  const average =
    array.reduce((sum, element, index) => {
      if (index == 0) {
        min = element;
        max = element;
      }

      if (element < min) {
        min = element;
      }

      if (element > max) {
        max = element;
      }

      return sum + element;
    }, 0) / length;

  return {
    average,
    min,
    max,
    length,
  };
}

// console.log(caesarCipher('abcde', 1));
console.log(analyzeArray([1, 8, 3, 4, 2, 6]));

module.exports = {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
};
