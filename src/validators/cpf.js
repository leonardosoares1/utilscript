function cpf(value) {
  let sum = 0;
  let rest;

  const valueClean = String(value).replace(/[^0-9]/g, '');

  if (
    valueClean === '00000000000' ||
    valueClean === '11111111111' ||
    valueClean === '22222222222' ||
    valueClean === '33333333333' ||
    valueClean === '44444444444' ||
    valueClean === '55555555555' ||
    valueClean === '66666666666' ||
    valueClean === '77777777777' ||
    valueClean === '88888888888' ||
    valueClean === '99999999999'
  ) {
    return false;
  }

  for (let i = 1; i <= 9; ) {
    sum += parseInt(valueClean.substring(i - 1, i), 10) * (11 - i);

    i += 1;
  }

  rest = (sum * 10) % 11;

  if (rest === 10 || rest === 11) {
    rest = 0;
  }

  if (rest !== parseInt(valueClean.substring(9, 10), 10)) {
    return false;
  }

  sum = 0;

  for (let i = 1; i <= 10; ) {
    sum += parseInt(valueClean.substring(i - 1, i), 10) * (12 - i);

    i += 1;
  }

  rest = (sum * 10) % 11;

  if (rest === 10 || rest === 11) {
    rest = 0;
  }

  if (rest !== parseInt(valueClean.substring(10, 11), 10)) {
    return false;
  }

  return true;
}

module.exports = { cpf };
