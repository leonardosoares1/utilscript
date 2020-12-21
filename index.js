const formatterCnpj = require('./src/formatters/cnpj');
const formatterCpf = require('./src/formatters/cpf');
const formatterMoney = require('./src/formatters/money');
const formatterPhone = require('./src/formatters/phone');
const formatterPostalCode = require('./src/formatters/postalCode');

const helperCapitalizeFirstLetter = require('./src/helpers/capitalizeFirstLetter');
const helperGetValidationErrorsYup = require('./src/helpers/getValidationErrorsYup');
const helperMoneyTyping = require('./src/helpers/moneyTyping');

const validatorCnpj = require('./src/validators/cnpj');
const validatorCpf = require('./src/validators/cpf');

const formatters = {
  cnpj: formatterCnpj,
  cpf: formatterCpf,
  money: formatterMoney,
  phone: formatterPhone,
  postalCode: formatterPostalCode,
};

const helpers = {
  capitalizeFirstLetter: helperCapitalizeFirstLetter,
  getValidationErrorsYup: helperGetValidationErrorsYup,
  moneyTyping: helperMoneyTyping,
};

const validators = {
  cnpj: validatorCnpj,
  cpf: validatorCpf,
};

module.exports = { formatters, helpers, validators }
