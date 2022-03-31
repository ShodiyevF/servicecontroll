const { getUserCtrl, postUserCtrt } = require('./ctrl')

const express = require('express').Router()

// express.get('/users', getUserCtrl)
express.route('/users')
.get(getUserCtrl)
.post(postUserCtrt)

module.exports = express