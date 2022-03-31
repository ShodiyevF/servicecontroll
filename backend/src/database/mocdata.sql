insert into admins (email, password,) values 
('abdusattorabdusattorov@gmail.com', '7771114'),
('johndoe@gmail.com', '6661114'),
('kimdur@gmail.com', '9999111');

insert into users (firstname, lastname, phone_number_one, phone_number_two, age, address) values 
( 'abdusattor', 'abdusattorov', '998999999999', '998888888888', 33, 'dizi pro 43'),
( 'john', 'doe', '998996666666', '998911111111', 66, 'amerika 19'),
( 'dilnoza', 'kubayeva', '998941923830', '998913081286', 29, 'Qanaqadur ota 83');

insert into device_bugs (bug_name) values 
('gnezdo'),
('microfon'),
('erkan'),
('camera'),
('battary');

insert into orders (device_name, user_id) values 
( 'Galaxy J4 plus', 3),
( 'Iphone 9', 1),
( 'Galaxy S20', 1),
( 'Nokia 12 02', 2),
( 'Galaxy S20', 2);

insert into bugs (bug_id, order_id) values 
( 4, 1),
( 5, 2),
( 2, 4),
( 5, 3),
( 1, 5),
( 2, 5);

insert into permissions (permission_name, company_id, stuff_id, see, edit, add, delete) values 
('foydalanuvchilar', 2, 1, 1, 1, 1, 1),
('statistka', 2, 1, 1, 1, 1, 1),
('sozlamalar', 1, 2, 1, 0, 0, 0),
('foydalanuvchilar', 1, 2, 0, 0, 0, 0);

insert into stuff (stuff_email, stuff_password, stuff_name, stuff_surname, stuff_phone_number, company_id, stuff_role) values 
('test', 'test', 'fayzulloh', 'shodiyev', '998912007435', 1, 1),
('birnima@gmail.com', 'birnima13', 'hello', 'world', '998912000001', 3, 2),
('ishchiaka@gmail.com', 'bilmiman', 'ishchi', 'aka', '998912123081', 3, 3),
('ishchiaka2@gmail.com', 'bilmiman2', 'ishchi2', 'aka2', '998912123082', 3, 3);