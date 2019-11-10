const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateRegisterInput(data) {
  let { name, email, password, password2 } = data;
  let errors = {};

  name = !isEmpty(name) ? name : '';
  email = !isEmpty(email) ? email : '';
  password = !isEmpty(password) ? password : '';
  password2 = !isEmpty(password2) ? password2 : '';

  if (!Validator.isLength(name, { min: 5, max: 30 })) {
    errors.name = 'Campo nome deve conter no minimo 5 caracteres e no maximo 30';
  }

  if (Validator.isEmpty(name)) {
    errors.name = 'Nome é obrigatório';
  }

  if (Validator.isEmpty(email)) {
    errors.email = 'Email.email é obrigatório';
  }

  if (!Validator.isEmail(email)) {
    errors.email = 'Email.email esta invalido';
  }

  if (Validator.isEmpty(password)) {
    errors.password = 'Senha é obrigatório';
  }

  if (!Validator.isLength(password, { min: 3, max: 30 })) {
    errors.password = 'Senha deve conter no minimo 3 caracteres e no maximo 30';
  }

  if (Validator.isEmpty(password2)) {
    errors.password2 = 'Campo de confirmação de senha é obrigatório';
  }

  if (!Validator.equals(password, password2)) {
    errors.password2 = 'Senhas tem que serem iguaia nos dois campos';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};