const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateLoginInput(data) {
  let errors = {};

  data.email = !isEmpty(data.email) ? data.email : '';
  data.password = !isEmpty(data.password) ? data.password : '';

  if (!Validator.isEmail(data.email)) {
    errors.email = 'Email esta invalido';
  }

  if (Validator.isEmpty(data.email)) {
    errors.email = 'campo Email é obrigatório';
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = 'Senha é obrigatória';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};