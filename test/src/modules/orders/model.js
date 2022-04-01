const { uniqRow } = require("../../lib/pg")

const ordersGETModel = async (user_id, company_id) => {
    try {

        const companys = await uniqRow('select * from company where user_id = $1', user_id)
        const row = +company_id
        const mycompany = companys.rows[row > companys.rows.length ? 0 : row === 0 ? 0 : row - 1].company_id
        const orders = await uniqRow('select * from orders where company_id = $1', mycompany)
        return orders
        
    } catch (error) {
        console.log(error.message);
    }
}

const ordersPOSTModel = async ({order_status, order_device_name, order_device_bug, order_over_time, order_price}, client_id, company_id) => {
    try {
        
        const query = `insert into orders (order_status, order_device_name, order_device_bug, order_over_time, order_price, client_id, company_id) values ($1, $2, $3, $4, $5, $6, $7)`
        await uniqRow(query, order_status, order_device_name, order_device_bug, order_over_time, order_price, client_id, company_id)
        return true
    } catch (error) {
        console.log(error.message);
    }
}

const orderOneGETModel = async (client_id, company_id) => {
    try {
        const query = `select * from orders where client_id = $1 and company_id = $2`
        return await uniqRow(query, client_id, company_id)
    } catch (error) {
        console.log(error.message); 
    }
}

module.exports = {
    ordersGETModel,
    ordersPOSTModel,
    orderOneGETModel
}