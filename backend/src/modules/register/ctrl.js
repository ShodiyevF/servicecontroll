const { registerAdmin } = require("./model");

const registerAdminCtrl = async (req, res) => {
    try {
        const added = await registerAdmin(req.body)
        if(added === 'qushildi'){
            res.json({
                status: 200,
                message: 'new admin has been added'
            })
        } else {
            res.json({
                status: 404,
                message: 'NOT ADDED'
            })
        }
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = {
    registerAdminCtrl
}