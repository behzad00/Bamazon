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
    connection.query("SELECT * FROM products"function(err, results) {
        if (err) throw err;

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
            var chosenItem;
            for (var i = 0; i < results.length; i++) {
                if (results[i].item_id === answer.itemNeeded) {
                    chosenItem = results[i];

                    if (chosenItem.stock_quantity >= parseInt(answer.quantityNeeded)) {
                        connection.query("UPDATE products SET ? WHERE ?", [

                            {
                                stock_quantity: stock_quantity - parseInt(answer.quantityNeeded)
                            },

                            {
                                item_id: itemNeeded
                            }


                        ]); if (error) throw error;

                    } else { console.log("Insufficient quantity!") };



                };
            };



        });

    });
};


};



























connection.end()
