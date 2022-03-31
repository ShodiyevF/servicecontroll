select
o.order_id,
o.order_situation_status,
u.firstname,
u.lastname,
o.device_name,
o.start_time_order,
o.end_time_order,
array_agg(distinct db.bug_name) as bugs
from orders as o
inner join users as u on u.user_id = o.user_id
inner join bugs as b on b.order_id = o.order_id
inner join device_bugs as db on db.bug_id = b.bug_id
group by o.order_id, o.order_situation_status, u.firstname, u.lastname, o.device_name, o.start_time_order, o.end_time_order;


select
*
from users;

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

select
p.permission_id,
p.permission_name,
c.company_name,
s.stuff_name,
p.see,
p.add,
p.edit,
p.delete
from permissions as p
inner join admins as a on a.company_id = p.company_id
inner join stuff as s on s.stuff_id = p.stuff_id
inner join company as c on c.company_id = s.company_id;