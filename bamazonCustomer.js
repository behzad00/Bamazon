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


connection.query("SELECT * FROM products", function(error, result) {
    for (var i = 0; i < result.length; i++) {
        console.log("Position: " + result[i].position + "\nItem ID: " + result[i].item_id + "\nProduct Name: " + result[i].product_name + "\nDepartment Name: " + result[i].department_name + "\nPrice: " + result[i].price + "\nStock Quantity: " + result[i].stock_quantity + "\n----------------------------\n");
    }
    purchaseWithItemID();

});

var purchaseWithItemID = function() {
    console.log("Inside purchaseWithItemID ")
    inquirer.prompt([{

            name: "itemNeeded",
            type: "input",
            message: "What is the ID of the product they would like to buy? "

        },

        {
            name: "quantityNeeded",
            type: "input",
            message: "How many units Would you like to buy? "

        }

    ]).then(function(answer) {
            var query = 'SELECT * FROM products where item_id=?';
            connection.query(query, [answer.itemNeeded], function(err, res) {
                    if (err) throw err;
                    // (answer.itemNeeded != res[0].item_id) {
                    //     Console.log("Item does not exist! Pleease refer to the available items!"
                    //     }

                    // });

                console.log("Position: " +res[0].position+ "\nItem ID: " +res[0].item_id+ "\nProduct Name: " +res[0].product_name+ "\nDepartment Name: " +res[0].department_name+ "\nPrice: " +res[0].price+ "\nStock Quantity: " +res[0].stock_quantity+ "\n----------------------------\n");

            });
         });


};



























connection.end()
