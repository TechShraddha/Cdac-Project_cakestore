//a Separate responsibility  for  customers database crud operation
var sql = require('./mysqlconnect');

//model
//Object Oriented Approach
//define Model 

var Order = function(Order){

    //Constructor


    this.orderid=Order.orderid;
    this.customerid=Order.customerid;
    this.cakeid=Order.cakeid;
    this.orderdate=Order.orderdate;
    this.orderamount=Order.orderamount;
    this.status=Order.status;
    this.paymentmode=Order.paymentmode;

    
};

Order.createOrder = function (newOrder, result) {  
    console.log("New order to be added ");
    console.log(newOrder);
        
        let orderid = newOrder.orderid;
        let customerid = newOrder.customerid;
        let cakeid = newOrder.cakeid;
        let orderdate = newOrder.orderdate;
        let orderamount = newOrder.orderamount;
        let status = newOrder.status;
        let paymentmode = newOrder.paymentmode;
        
        var values =  [customerid, cakeid, orderdate, orderamount, status, paymentmode];
        console.log(values);
        sql.query('INSERT INTO orders(customer_id, cake_id, order_date, order_amount, status, payment_mode) VALUES ( ?, ?, ?, ?, ?, ?)', values, function (err, response) {
          if(err) {
            console.log("error: ", err);
            result(err, null);
          }
          else{
                var RegistrationSuccessful="Order Updated Successful";
                console.log(response);
                result(null, RegistrationSuccessful);
          }
        
                    
        });

};

Order.getOrderById = function (order_id, result) {
    sql.query("Select * from orders where order_id = ? ", order_id, function (err, res) {             
            if(err) {
              console.log("error: ", err);
              result(err, null);
            }
            else{
              result(null, res);     
            }
        });   
};




Order.getAllOrder = function (result) {
  console.log("Invoking dal getall customers");
  
    sql.query("select o.customer_id, c.first_name, c.last_name, f.title, o.order_date, o.order_amount, o.payment_mode, o.status from customers c inner join orders o on c.customer_id=o.customer_id inner join cakes f on o.cake_id=f.cake_id    ", function (err, response) {
            if(err) {
              console.log("error: ", err);
              result(null, err);
            }
            else{
              console.log('Orders : ', response);  
              result(null, response);
            }
        });   
};

// Customer.updateById = function(order_id, Order, result){

// sql.query("UPDATE customers SET first_name = ? last_name = ? WHERE customer_id = ?", [Order.first_name, Order.last_name, customer_id], 
//           function (err, res) {
//               if(err) {
//                     console.log("error: ", err);
//                     result(null, err);
//                 }
//               else{   
//                 result(null, res);
//                 }
//             }); 
// };


Order.remove = function(id, result){
sql.query("DELETE FROM orders WHERE order_id = ?", id,
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

module.exports=Order;