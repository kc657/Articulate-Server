const mongoose = require('mongoose')
const Schema = mongoose.Schema
const passportLocalMongoose = require('passport-local-mongoose')

UserSchema.plugin(passportLocalMongoose)

module.exports = mongoose.model('User', new Schema({
  first_name: String,
  last_name: String,
  password: String,
  email_address: String,
  username: String
}))
