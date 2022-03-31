const { readRow, uniqRow } = require("../../lib/pg")
const { getUsersQuery, postUserQuery } = require("./query")

const getUserModel = async () => {
    const users = await readRow(getUsersQuery)
    return await users
}

const postUserModel = async ({ name, surname, age, number, numberr, address}) => {
    if (await uniqRow(postUserQuery, name, surname, number, numberr, age, address)) {
        return `qo'shildi`
    }
}

module.exports = {
    getUserModel,
    postUserModel
}