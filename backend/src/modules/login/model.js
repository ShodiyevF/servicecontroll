const { readRow } = require("../../lib/pg")

const login = async (email, password) => {
    const stuff = await readRow('select * from stuff')
    const filtered = stuff.find(el => el.stuff_email === email && el.stuff_password === password)
    return filtered
}

module.exports = {
    login
}