const { permissionCtrl } = require("../../lib/permissions/ctrl");
const { tokenchecker } = require('../../lib/tokenchecker');
const { clientsGETModel, clientsPOSTModel, clientsStatusPUTModel } = require("./model")

const clientGETCtrl = async (req, res) => {
    try {
        const permission = await permissionCtrl(tokenchecker(req.body.token).id, 1, 1)

        if(permission){
            const company_id = (req.body.company_id)-1
            res.json({
                status: 200,
                message: 'data has sended',
                data: await clientsGETModel(tokenchecker(req.body.token).id, company_id ? company_id : 0)
            })
        } else {
            res.json({
                status: 404,
                message: `you do'nt have any permissions`
            })
        }
        
    } catch (error) {
        console.log(error);
    }
}

const clientPOSTCtrl = async (req, res) => {
    try {
        const permission = await permissionCtrl(tokenchecker(req.body.token).id, 2, 1)
        
        if(permission){
            const company_id = (req.body.company_id)-1
            res.json({
                status: 200,
                message: 'data has sended',
                data: await clientsPOSTModel(req.body, tokenchecker(req.body.token).id, company_id ? company_id : 0)
            })
        } else {
            res.json({
                status: 404,
                message: `you do'nt have any permissions`
            })
        }
        
    } catch (error) {
        console.log(error);
    }
}

const clientStatusPUTCtrl = async (req, res) => {
    try {
        const permission = await permissionCtrl(tokenchecker(req.body.token).id, 4, 1)
        
        if(permission){
            const company_id = (req.body.company_id)-1
            res.json({
                status: 200,
                message: 'data has sended',
                data: await clientsStatusPUTModel(req.body)
            })
        } else {
            res.json({
                status: 404,
                message: `you do'nt have any permissions`
            })
        }
        
    } catch (error) {
        console.log(error);
    }
}


module.exports = {
    clientGETCtrl,
    clientPOSTCtrl,
    clientStatusPUTCtrl
}