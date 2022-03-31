const { uniqRow } = require("../pg")
const { tokenchecker } = require("../tokenchecker")

const permissionCtrl = async (userId, nameId, actionId) => {
    const query = `
    select
    *
    from permissions_access as pc
    inner join company as c on c.company_id = pc.company_id
    where c.user_id = $1;
    `
    const test = await uniqRow(query, userId)
    const permissionsModel = test.rows
    
    const read = permissionsModel.find(el => el.permissions_names_id === nameId && el.action_id === actionId)
   
    return read
}

module.exports = {
    permissionCtrl
}

