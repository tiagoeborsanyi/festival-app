const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recipientSchema = new Schema({
    email: String,
    name: String
});

module.exports = recipientSchema;