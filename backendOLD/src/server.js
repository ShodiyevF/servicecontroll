const express = require('express')
const login = require('./modules/login/index')
const register = require('./modules/register/index')
const users = require('./modules/users/index')

const app = express()
app.use(express.json())

app.use(function (req, res, next) {

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header("Access-Control-Allow-Headers", "*")

    next();
});

app.use(login)
app.use(register)
app.use(users)

app.listen(4000, console.log('server manimcha 4000 port da ishlayapti !'))

