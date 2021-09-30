
var Order = require('../dal/ordersdal');


exports.getAll = function(request, response) {
    console.log("calling controller function");
    Order.getAllOrder(function(err, order) {
      if (err)
      response.send(err);
      response.send(order);
    });
  };
  
  exports.insert = function(request, response) {
    var new_Order = new Order(request.body);
    console.log(JSON.stringify(new_Order));
    
  
    //handles null error 
    //  if(new_Customer.firstname != null &&  new_Customer.firstname !='' || new_Customer.lastname != null &&  new_Customer.lastname !='' || new_Customer.email != null &&  new_Customer.email !='' || new_Customer.contactno != null &&  new_Customer.contactno !='' || new_Customer.password != null &&  new_Customer.password !='' || new_Customer.cpassword != null &&  new_Customer.cpassword !=''){
    //     response.status(400).send({ error:true, message: 'Please provide Complete Customer/status' });
    //   }
    //  else{
        Order.createOrder(new_Order, function(err, Order) {
        if (err)
        response.send(err);
        // response.json(Order);
        response.send(Order);
      });
    // }
  };
  
  exports.getBy = function(request, response) {
    Order.getOrderById(request.params.order_id, function(err, order) {   
      if (err)
      response.send(err);
      response.json(order);
    });
  };

  
  // exports.update = function(request, response) {
  //   Order.updateById(request.params.order_id, new Order(request.body), function(err, order) {
  //     if (err)
  //     response.send(err);
  //     response.json(order);
  //   });
  // };
  
  exports.remove = function(request, response) {
    console.log(request.body);
    Order.remove( request.params.id, function(err, order) {
      if (err)
      response.send(err);
      response.json({ message: 'Order successfully deleted' +order});
    });
  };