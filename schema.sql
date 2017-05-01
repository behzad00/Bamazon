CREATE database Bamazon;

use Bamazon;

CREATE TABLE products (
	position INT NOT NULL,
	item_id VARCHAR(150) NOT NULL,
	product_name VARCHAR(150) NOT NULL,
	department_name VARCHAR(150) NOT NULL,
	price DECIMAL(10,4) NOT NULL,
	stock_quantity INTEGER(5),
	PRIMARY KEY(position)
);

SELECT * FROM products;