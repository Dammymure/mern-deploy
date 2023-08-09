const express = require('express')
const router = express.Router()

const { createUser } = require('../controller/UserControl')

router.post("/user/create", createUser)

module.exports = router