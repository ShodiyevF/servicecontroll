const { loginCtrl } = require('./ctrl')

const Router = require('express').Router()

Router.post('/login', (req, res) => {
    loginCtrl(req, res)
})

module.exports = Router