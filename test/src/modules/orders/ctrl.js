const { permissionCtrl } = require("../../lib/permissions/ctrl");
const { tokenchecker } = require("../../lib/tokenchecker");
const { ordersGETModel, ordersPOSTModel, orderOneGETModel } = require("./model")

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
        const write = permissionCtrl(tokenchecker(req.body.token).id, 2, 2)
        if (write) {

            const writeData = await ordersPOSTModel(req.body, req.body.client_id, req.body.company_id)
            
            return res.json({
                status: 200,
                message: 'data has write',
            })
        } else {
            return res.send('you dont have any permissions')
        }
    } catch (error) {
        console.log(error.message);
    }
}


const orderOneGETCtrl = async (req, res) => {
    try {
        const write = permissionCtrl(tokenchecker(req.body.token).id, 1, 2)
        if (write) {
            return res.json({
                status: 200,
                message: 'data has sended',
                data: await (await orderOneGETModel(req.body.client_id, req.body.company_id)).rows
            })
        } else {
            return res.send('you dont have any permissions')
        }
    } catch (error) {
        
    }
}

module.exports = {
    orderGETCtrl,
    orderPOSTCtrl,
    orderOneGETCtrl
}