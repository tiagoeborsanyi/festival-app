const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const recipientSchema = require('./Recipient');
const inscricaoSchema = require('./Inscricao');

// Create Schema
const EventoSchema = new Schema({
  name: String,
  phone: String,
  mobile: String,
  nameCompany: String,
  state: String,
  city: String,
  email: String,
  EventDate: Date,
  description: Object,
  // dados dos usuarios inscritos
  recipients: [recipientSchema],
  subscription: [inscricaoSchema],
  active: {
    type: Boolean,
    default: false
  },
  _user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    default: null
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Evento = mongoose.model('eventos', EventoSchema);