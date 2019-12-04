const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const recipientSchema = require('./Recipient');

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
  subscription: [{
    tipo: String,
    title: String,
    subtitle: String,
    descrption: String,
    image: String,
    value: Number,
    responsabilidade: Boolean,
    qtdTotal: {
      type: Number,
      default: 0
    },
    qtdInscritos: {
      type: Number,
      default: 0
    }
  }],
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