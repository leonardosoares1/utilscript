function capitalizeFirstLetter(value) {
  const firstLetterUppercase = String(value).charAt(0).toUpperCase();

  const restTextLowercase = String(value).toLowerCase().slice(1);

  const textCapitalize = `${firstLetterUppercase}${restTextLowercase}`;

  return textCapitalize;
}

module.exports = { capitalizeFirstLetter };
