const { permissionCtrl } = require("../../lib/permissions/ctrl");
const { tokenchecker } = require("../../lib/tokenchecker");
const { ordersModel, ordersGETModel } = require("./model")

const orderGETCtrl = async (req, res) => {
    try {
        const read = permissionCtrl(tokenchecker(req.body.token).id, 1, 2)
        if (read) {
            // console.log(await ordersGETModel(+(tokenchecker(req.body.token).id), req.body.company_id ? req.body.company_id - 1 : 0));
            return res.json({
                status: 200,
                message: 'data has sended',
                data: (await ordersGETModel(+(tokenchecker(req.body.token).id), req.body.company_id ? req.body.company_id : 0)).rows
            })
        } else {
            return res.send('you dont have any permissions')
        }
    } catch (error) {
        console.log(error.message, 'asdasd');
    }
}

const orderPOSTCtrl = async (req, res) => {
    try {
        const permissions = (await ordersModel(req.body.user_id)).rows
        const write = permissions.find(el => el.permissions_names_id === 2 && el.action_id === 2)
        if (write) {
            return res.send('data')
        } else {
            return res.send('you dont have any permissions')
        }
    } catch (error) {
        
    }
}

module.exports = {
    orderGETCtrl,
    orderPOSTCtrl
}