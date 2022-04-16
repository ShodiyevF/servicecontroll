const { uniqRow, readRow } = require("../../lib/pg")

const registerAdmin = async ({ email, password, name, surname, phone_number, company, role }) => {
    try {
        const test = await uniqRow('insert into company (company_name) values ($1)', company)
        const registerQuery = `insert into stuff (stuff_email, stuff_password, stuff_name, stuff_surname, stuff_phone_number, company_id, stuff_role) values ($1, $2, $3, $4, $5, $6, $7);`
        if (test) {
            const companys = await uniqRow('select * from company where company_name = $1', company.toString())
            if (await uniqRow(registerQuery, email, password, name, surname, phone_number, companys.rows[0].company_id, role)) {
                return 'qushildi'
            } else {
                return 'qushilmadi'
            }
        } else {
            return 'qushilmadi'
        }
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = {
    registerAdmin
}