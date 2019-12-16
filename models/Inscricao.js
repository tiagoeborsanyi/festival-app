const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const inscricaoSchema = new Schema({
    tipo: String,
    title: String,
    subtitle: String,
    descrption: String,
    image: String,
    value: Number,
    responsabilidade: {
      type: Boolean,
      default: false
    },
    qtdTotal: {
      type: Number,
      default: 0
    },
    qtdInscritos: {
      type: Number,
      default: 0
    },
    dateFinal: Date
});

module.exports = inscricaoSchema;