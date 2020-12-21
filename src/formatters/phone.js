function phone({ defaultValue = '', value }) {
  if (!value) {
    return defaultValue;
  }

  const phoneFormatted = String(value)
    .replace(/[^0-9]/g, '')
    .replace(/(\d{2})(\d)/, '($1) $2')
    .replace(/(\d{4,5})(\d{4})/, '$1-$2')
    .replace(/(-\d{4})\d+?$/, '$1');

  return phoneFormatted;
}

module.exports = phone;
