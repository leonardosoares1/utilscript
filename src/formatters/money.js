function money({ defaultValue = 'R$ 0,00', value }) {
  if (!value) {
    return defaultValue;
  }

  const moneyFormatted = Number(value)
    .toFixed(2)
    .replace('.', ',')
    .replace(/(\d)(\d{3}),/g, '$1.$2,')
    .replace(/(\d)(\d{3})\.(\d{3}),/g, '$1.$2.$3,');

  const moneyFormattedWithPrefix = `R$ ${moneyFormatted}`;

  return moneyFormattedWithPrefix;
}

module.exports = money;
