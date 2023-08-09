const express = require('express')
const User = require("../models/UserModel")

const createUser = async (req, res) => {
 const { fullname, email, password } = req.body
 // If it doesnt exist create user 
 const createdUser = await User.create({
  fullname,
  email,
  password,
 })
 res.status(200).json({
  id: createdUser._id,
  fullname: createdUser.fullname,
  email: createdUser.email,
  password: createdUser.password,
  msg: "User created successfully"
 })

}

module.exports = { createUser }