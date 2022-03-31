select 
*
from clients as cl
inner join company as c on c.company_id = cl.company_id
where c.user_id = 3;

select
*
from orders as o 
inner join company as c on c.company_id = 3
inner join users as u on u.user_id = 3;

