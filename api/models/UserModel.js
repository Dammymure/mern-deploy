const mongoose = require('mongoose')


const userSchema = new mongoose.Schema({
 fullname: {
  type: String,
  required: [true, "Please enter fullname"]
 },
 email: {
  type: String,
  required: [true, "Please enter email"]
 },
 password: {
  type: String,
  required: [true, "Please enter password"]
 }
},
 {
  timestamps: true,
 }
)

const User = mongoose.model("User", userSchema)
module.exports = User