const mongoose = require('mongoose')
const Schema = mongoose.Schema
const User = require('./user')

module.exports = mongoose.model('Project', new Schema({
    title: String,
    transcript: String,
    transcriptSpilt: Array,
    tones: Object,
    dateDue: Date,
    dateCreated: { type: Date, default: Date.now },
    userId: String,
    _user: {type: Schema.Types.ObjectId, ref: 'User'}
  })
);
