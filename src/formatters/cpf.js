function cpf({ defaultValue = '', value }) {
  if (!value) {
    return defaultValue;
  }

  const valueWithoutMask = String(value).replace(/[^0-9]/g, '');

  const cpfFormatted = valueWithoutMask
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1-$2');

  return cpfFormatted;
}

module.exports = cpf;
