var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
	host: "localhost",
	port: 3306,
	user: "root",
	password: "Mysql4me1$",
	database: "Bamazon"
});

connection.connect(function(err){
	if(err) throw err;
	console.log("successfully connected as id " +connection.threadId);
	});


connection.query("SELECT * FROM products" , function(error , result){
	for (var i=0 ; i<result.length; i++){
		console.log("Position: " +result[i].Position+ "\nItem ID: " +result[i].item_id+ "\nProduct Name: " +result[i].product_name+ "\nDepartment Name: " +result[i].department_name+ "\nPrice: " +result[i].price+ "\nStock Quantity: " +result[i].stock_quantity+ "\n----------------------------\n");
	}

});




























connection.end()