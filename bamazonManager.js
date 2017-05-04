var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Mysql4me1$",
    database: "Bamazon"
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("successfully connected as id " + connection.threadId);
});

var start = function(){
	inquirerprompt({
		name : "managerChoices",
		type : "rawlist",
		message : "You can [View Products for Sale] or [View Low Inventory] or [Add to Inventory] or [Add New Product]"
		choices : ["View Products for Sale","View Low Inventory" ,"Add to Inventory" , "Add New Product" ]
	})
}