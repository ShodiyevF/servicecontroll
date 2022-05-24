const jwt = require('jsonwebtoken')

const token = jwt.sign('asd', 'test')

console.log(token);

const id = jwt.verify('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NTMzODcxNTR9.wB1tx4dIDwVP6LYPatd6nt3NML3OiJ-SM65OsShjsag', 'birnima13')

console.log(id);