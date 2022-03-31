const { uniqRow } = require("../../lib/pg")

const ordersGETModel = async (user_id, company_id) => {
    try {

        const companys = await uniqRow('select * from company where user_id = $1', user_id)
        const row = +company_id
        const mycompany = companys.rows[row > companys.rows.length ? 0 : row].company_id
        const orders = await uniqRow('select * from orders where company_id = $1', mycompany)
        // console.log(orders);
        return orders
        
    } catch (error) {
        console.log(error.message);
    }
}

const ordersPOSTModel = async ({order_status, order_device_name, order_device_bug, order_over_time}, client_id, company_id) => {
    try {
        const query = `
        insert into orders (order_status, order_device_name, order_device_bug, order_over_time, client_id, company_id) values ($1, $2, $3, $4, $5, $6)`
        await uniqRow(query, order_status, order_device_name, order_device_bug, order_over_time, client_id, company_id)
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = {
    ordersGETModel,
    ordersPOSTModel
}