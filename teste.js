// Req-1
// SELECT product_name FROM northwind.products;

// Req-2
// SELECT * FROM northwind.products;

// Req-3
// SELECT id FROM northwind.products;

// Req-4
// SELECT COUNT(product_name) FROM northwind.products;

// Req-5
// SELECT * FROM northwind.products LIMIT 13 OFFSET 3;
// caso não esteja certo só ajustar o número do OFFSET

// Req-6
// SELECT product_name, id FROM northwind.products ORDER BY product_name;

// Req-7
// SELECT id FROM northwind.products ORDER BY id DESC LIMIT 5;
// OU
// SELECT id FROM northwind.products LIMIT 5 OFFSET 40;

// Req-8
// SELECT 5+6 'A','de' AS 'Trybe', 2+8 'eh';

// Req-9
// SELECT notes FROM northwind.purchase_orders WHERE notes <> 'NULL';

// Req-10
// SELECT * FROM northwind.purchase_orders
// WHERE created_by >= 3
// ORDER BY created_by DESC, id;

// Req-11
// SELECT notes FROM northwind.purchase_orders
// WHERE notes >= 'Purchase generated based on Order #30' AND notes <= 'Purchase generated based on Order #39';

// Req-12
// SELECT submitted_date FROM northwind.purchase_orders
// WHERE DATE(submitted_date) = '2006-04-26';

// Req-13
// SELECT supplier_id FROM northwind.purchase_orders
// WHERE supplier_id = 1 OR supplier_id = 3;

// Req-14
// SELECT supplier_id FROM northwind.purchase_orders
// WHERE supplier_id >= 1 AND supplier_id <= 3;

// Req-15
// SELECT HOUR (submitted_date) submitted_hour FROM northwind.purchase_orders;

// Req-16
// SELECT submitted_date FROM northwind.purchase_orders
// WHERE DATE(submitted_date) BETWEEN '2006-01-26 00:00:00' AND '2006-03-31 23:59:59';

// Req-17
// SELECT id, supplier_id FROM northwind.purchase_orders
// WHERE supplier_id IN (1, 3, 5, 7);

// Req-18
// SELECT * FROM northwind.purchase_orders
// WHERE supplier_id = 3 AND status_id = 2;

// Req-19
// SELECT COUNT(employee_id) orders_count FROM northwind.orders
// WHERE employee_id IN (5, 6) AND shipper_id = 2;

// Req-20

// Req-21

// Req-22

// Req-23

// Req-24

// Req-25

// Req-26

// Req-27