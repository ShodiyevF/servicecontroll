create database servicecenter;

drop table company cascade;
create table company(
    company_id int generated always as identity primary key,
    company_name varchar(120) not null
);

drop table stuff cascade;
create table stuff(
    stuff_id int generated always as identity primary key,
    stuff_email varchar(64) not null,
    stuff_password varchar(70) not null,
    stuff_name varchar(70) not null,
    stuff_surname varchar(70) not null,
    stuff_phone_number bigint not null,
    company_id int not null references company(company_id),
    stuff_role varchar(40) not null
);

-- drop table admins cascade;
-- create table admins(
--     admin_id int generated always as identity primary key,
--     email varchar(126) not null unique,
--     company_id int not null references company(company_id),
--     password varchar(7) not null,
--     admin_status smallint
-- );

-- drop table worker cascade;
-- create table worker(
--     worker_id int generated always as identity primary key,
--     worker_name varchar(70) not null,
--     worker_surname varchar(70) not null,
--     worker_role varchar(40)
-- );

drop table permissions cascade;
create table permissions(
    permission_id int generated always as identity primary key,
    permission_name varchar(126) not null,
    company_id int not null references stuff(stuff_id),
    stuff_id int not null references stuff(stuff_id),
    see smallint default 0,
    edit smallint default 0,
    add smallint default 0,
    delete smallint default 0
);

drop table users cascade;
create table users(
    user_id int generated always as identity primary key,
    firstname varchar(64) not null,
    lastname varchar(82) not null,
    phone_number_one bigint not null,
    phone_number_two bigint not null,
    age smallint not null,
    address varchar(120) not null,
    time TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

drop table device_bugs cascade;
create table device_bugs(
    bug_id int generated always as identity primary key,
    bug_name varchar(128) not null
);

drop table orders cascade;
create table orders(
    order_id int generated always as identity primary key,
    order_situation_status smallint default 1,
    device_name varchar(128) not null,
    start_time_order TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    end_time_order text,
    order_status smallint default 1,
    user_id int not null references users(user_id)
);

drop table bugs cascade;
create table bugs(
    bugs_id int generated always as identity primary key,
    bug_id int references device_bugs(bug_id),
    order_id int references orders(order_id)
);