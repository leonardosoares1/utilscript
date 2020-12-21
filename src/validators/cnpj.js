function cnpj(value) {
  const valueClean = String(value).replace(/[^0-9]/g, '');

  if (valueClean === '') {
    return false;
  }

  if (valueClean.length !== 14) {
    return false;
  }

  if (
    valueClean === '00000000000000' ||
    valueClean === '11111111111111' ||
    valueClean === '22222222222222' ||
    valueClean === '33333333333333' ||
    valueClean === '44444444444444' ||
    valueClean === '55555555555555' ||
    valueClean === '66666666666666' ||
    valueClean === '77777777777777' ||
    valueClean === '88888888888888' ||
    valueClean === '99999999999999'
  ) {
    return false;
  }

  let length = valueClean.length - 2;
  let numbers = valueClean.substring(0, length);
  const digits = valueClean.substring(length);
  let sum = 0;
  let pos = length - 7;
  let i;

  for (i = length; i >= 1; i -= 1) {
    sum += Number(numbers.charAt(length - i)) * pos--;

    if (pos < 2) {
      pos = 9;
    }
  }

  let result = sum % 11 < 2 ? 0 : 11 - (sum % 11);

  if (result !== Number(digits.charAt(0))) {
    return false;
  }

  length += 1;
  numbers = valueClean.substring(0, length);
  sum = 0;
  pos = length - 7;

  for (i = length; i >= 1; i -= 1) {
    sum += Number(numbers.charAt(length - i)) * pos--;

    if (pos < 2) {
      pos = 9;
    }
  }

  result = sum % 11 < 2 ? 0 : 11 - (sum % 11);

  if (result !== Number(digits.charAt(1))) {
    return false;
  }

  return true;
}

module.exports = { cnpj };
