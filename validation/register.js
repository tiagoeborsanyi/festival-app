const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateRegisterInput(data) {
  let errors = {};

  data.name.name = !isEmpty(data.name.name) ? data.name.name : '';
  data.email.email = !isEmpty(data.email.email) ? data.email.email : '';
  data.password.password = !isEmpty(data.password.password) ? data.password.password : '';
  data.password2.password2 = !isEmpty(data.password2.password2) ? data.password2.password2 : '';

  if (!Validator.isLength(data.name.name, { min: 5, max: 30 })) {
    errors.name = 'Campo nome deve conter no minimo 5 caracteres e no maximo 30';
  }

  if (Validator.isEmpty(data.name.name)) {
    errors.name = 'Nome é obrigatório';
  }

  if (Validator.isEmpty(data.email.email)) {
    errors.email = 'Email.email é obrigatório';
  }

  if (!Validator.isEmail(data.email.email)) {
    errors.email = 'Email.email esta invalido';
  }

  if (Validator.isEmpty(data.password.password)) {
    errors.password = 'Senha é obrigatório';
  }

  if (!Validator.isLength(data.password.password, { min: 3, max: 30 })) {
    errors.password = 'Senha deve conter no minimo 3 caracteres e no maximo 30';
  }

  if (Validator.isEmpty(data.password2.password2)) {
    errors.password2 = 'Campo de confirmação de senha é obrigatório';
  }

  if (!Validator.equals(data.password.password, data.password2.password2)) {
    errors.password2 = 'Senhas tem que serem iguaia nos dois campos';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};