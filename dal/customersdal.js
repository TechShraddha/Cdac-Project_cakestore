//a Separate responsibility  for  customers database crud operation
var sql = require('./mysqlconnect');

//model
//Object Oriented Approach
//define Model 

var Customer = function(Customer){

    //Constructor

    // this.customerid=Customer.customerid;
    this.firstname = Customer.firstname;
    this.lastname = Customer.lastname;
    this.email = Customer.email;
    this.contactno = Customer.contactno;
    this.password = Customer.password;
    this.cpassword = Customer.cpassword;
    
};

Customer.createCustomer = function (newCustomer, result) {  
    console.log("New Customer to be added ");
    console.log(newCustomer);
        let firstname = newCustomer.firstname;
        let lastname = newCustomer.lastname;
        let email = newCustomer.email;
        let contactno = newCustomer.contactno;
        let password = newCustomer.password;
        // let cpassword = newCustomer.cpassword;
        
        var values =  [ firstname, lastname, email, contactno, password];
        console.log(values);
        sql.query('INSERT INTO customers(first_name, last_name, email, contant_no, password) VALUES ( ?, ?, ?, ?, ?)', values, function (err, response) {
          if(err) {
            console.log("error: ", err);
            result(err, null);
          }
          else{
                var RegistrationSuccessful="Customer Registration Successful";
                console.log(response);
                result(null, RegistrationSuccessful);
          }
        
                    
        });

};

Customer.getCustomerById = function (customer_id, result) {
    sql.query("Select * from customers where customer_id = ? ", customer_id, function (err, res) {             
            if(err) {
              console.log("error: ", err);
              result(err, null);
            }
            else{
              result(null, res);     
            }
        });   
};

Customer.getByCustomerEmail = function (email, result) {
  sql.query("select o.customer_id, c.first_name, c.last_name, f.title, o.order_date, o.order_amount from customers c inner join orders o on c.customer_id=o.customer_id inner join cakes f on o.cake_id=f.cake_id where c.email= ?  ", email, function (err, response) {             
          if(err) {
            console.log("error: ", err);
            result(err, null);
          }
          else{
            result(null, response);     
          }
      });   
};


Customer.getAllCustomer = function (result) {
  console.log("Invoking dal getall customers");
  
    sql.query("Select * from customers", function (err, response) {
            if(err) {
              console.log("error: ", err);
              result(null, err);
            }
            else{
              console.log('Customers : ', response);  
              result(null, response);
            }
        });   
};

Customer.updateById = function(customer_id, Customer, result){

sql.query("UPDATE customers SET first_name = ? last_name = ? WHERE customer_id = ?", [Customer.first_name, Customer.last_name, customer_id], 
          function (err, res) {
              if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
              else{   
                result(null, res);
                }
            }); 
};


Customer.remove = function(id, result){
sql.query("DELETE FROM customers WHERE customer_id = ?", [id],
            function (err, res) {
              if(err) {
                  console.log("error: ", err);
                  result(null, err);
              }
              else{
                  result(null, res);
              }
        }); 
};

module.exports=Customer;