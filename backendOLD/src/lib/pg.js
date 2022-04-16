const pg = require('pg')

const pool = new pg.Pool({
    user: 'fayzulloh',
    password: 'test',
    host: 'localhost',
    port: 5432,
    database: 'servicecenter',
})

const uniqRow = async (query, ...arr) => {

    try {
        const client = await pool.connect()
        const data = await client.query(query, arr)
        return data
    } catch (error) {
        console.log(error.message);
    }

}


const readRow = async (query) => {

    try {
        const client = await pool.connect()
        const data = await client.query(query)
        return data.rows
    } catch (error) {
        console.log(error.message);
    }

}


module.exports = {
    uniqRow,
    readRow
}