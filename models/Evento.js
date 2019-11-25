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
  description: String,
  recipients: [recipientSchema],
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