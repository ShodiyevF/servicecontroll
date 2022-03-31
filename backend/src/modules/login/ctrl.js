const jwt = require('jsonwebtoken')
const { login } = require("./model")

const loginCtrl = async (req, res) => {
    try {
        const isLogin = login(req.body.email, req.body.password)
        const user = await isLogin
        const verify = user.stuff_role
        const token = jwt.sign({ user: verify }, 'olma')
        if (await isLogin) {
            res.json({
                status: 200,
                message: 'you are successfuly logined',
                data: token
            })
        } else {
            res.json({
                status: 404,
                message: 'wrong password or email',
                data: null
            })
        }
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = {
    loginCtrl
}