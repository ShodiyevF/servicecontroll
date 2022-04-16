const getUsersQuery = `
select
*
from users;
`

const getPermissionsQuery = `
select
p.permission_id,
p.permission_name,
c.company_name,
s.stuff_email,
s.stuff_role,
p.see,
p.add,
p.edit,
p.delete
from permissions as p
inner join stuff as s on s.stuff_id = p.stuff_id
inner join company as c on c.company_id = s.company_id;
`



const postUserQuery = `
insert into users (firstname, lastname, phone_number_one, phone_number_two, age, address) values ($1,$2,$3,$4,$5,$6)
`

module.exports = {
    getUsersQuery,
    getPermissionsQuery,
    postUserQuery
}