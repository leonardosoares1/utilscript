function getValidationErrorsYup(errYup) {
  const validationErrorsYup = {};

  errYup.inner.forEach(error => {
    validationErrorsYup[error.path] = error.message;
  });

  return validationErrorsYup;
}

module.exports = { getValidationErrorsYup };
