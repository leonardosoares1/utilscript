function cnpj({ defaultValue = '', value }) {
  if (!value) {
    return defaultValue;
  }

  const valueWithoutMask = String(value).replace(/[^0-9]/g, '');

  const cnpjFormatted = valueWithoutMask
    .replace(/(\d{2})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1/$2')
    .replace(/(\d{4})(\d)/, '$1-$2')
    .replace(/(-\d{2})\d+?$/, '$1');

  return cnpjFormatted;
}

module.exports = cnpj;
