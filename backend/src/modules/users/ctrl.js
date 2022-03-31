const jwt = require('jsonwebtoken')
const { readRow } = require('../../lib/pg')
const { getUserModel, postUserModel } = require('./model')
const { getPermissionsQuery } = require('./query')

const getUserCtrl = async (req, res) => {
    try {
        // const permissions = await readRow(getPermissionsQuery)
        // const verifyd = jwt.verify(req.body.token, 'olma')
        // const filter = permissions.filter(el => el.stuff_role === verifyd.user)
    
        // console.log(filter);
        // for (const i of filter) {

        //     if (i.see === 1) {
        //         return readRow
        //         return readRow
        //     } else if (i.add === 1) {
                
        //     }
        // }
        // if (verifyd.user === '1') {
        //     console.log();
        // }

        res.json({
            status: 200,
            message: 'data has been readed',
            data: await getUserModel()
        })
        
    } catch (error) {
        console.log(error.message);
    }
}

const postUserCtrt = async (req, res) => {
    const num1 = +(req.body.number)
    const num2 = +(req.body.numberr)
    const age1 = +(req.body.age)
    console.log(isNaN(num1));
    try {

        
        if (isNaN(num1) && isNaN(num2) && isNaN(age1)) {
            
            return res.json({
                status: 400,
                message: "Telefon lar yoki yosh notog'ri kiritilgan"
            })
        } else {
            const test = await postUserModel(req.body)
            if (test === `qo'shildi`) {
                return res.json({
                    status: 200,
                    message: 'Data has added'
                })
            } else {
                return res.json({
                    status: 404,
                    message: 'Data has not added'
                })
            }
        }


    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    getUserCtrl,
    postUserCtrt
}