const { registerAdminCtrl } = require('./ctrl')

const express = require('express').Router()

express.post('/register/admin/birnima', registerAdminCtrl)

module.exports = express