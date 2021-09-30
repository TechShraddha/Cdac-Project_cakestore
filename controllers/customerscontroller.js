
var Customer = require('../dal/customersdal');

exports.getAll = function(request, response) {
    console.log("calling controller function");
    Customer.getAllCustomer(function(err, customer) {
      if (err)
      response.send(err);
      response.send(customer);
    });
  };
  
  exports.insert = function(request, response) {
    var new_Customer = new Customer(request.body);
    console.log(JSON.stringify(new_Customer));
    
  
    //handles null error 
    //  if(new_Customer.firstname != null &&  new_Customer.firstname !='' || new_Customer.lastname != null &&  new_Customer.lastname !='' || new_Customer.email != null &&  new_Customer.email !='' || new_Customer.contactno != null &&  new_Customer.contactno !='' || new_Customer.password != null &&  new_Customer.password !='' || new_Customer.cpassword != null &&  new_Customer.cpassword !=''){
    //     response.status(400).send({ error:true, message: 'Please provide Complete Customer/status' });
    //   }
    //  else{
        Customer.createCustomer(new_Customer, function(err, Customer) {
        if (err)
        response.send(err);
        // response.json(Customer);
        response.send(Customer);
      });
    // }
  };
  
  exports.getBy = function(request, response) {
    Customer.getCustomerById(request.params.customer_id, function(err, customer) {   
      if (err)
      response.send(err);
      response.json(customer);
    });
  };

  exports.getByEmail = function(request, response) {
    Customer.getByCustomerEmail(request.params.email, function(err, customer) {   
      if (err)
      response.send(err);
      response.json(customer);
    });
  };
  
  exports.update = function(request, response) {
    Customer.updateById(request.params.customer_id, new Customer(request.body), function(err, customer) {
      if (err)
      response.send(err);
      response.json(customer);
    });
  };
  
  exports.remove = function(request, response) {
    Customer.remove( request.params.customer_id, function(err, customer) {
      if (err)
      response.send(err);
      response.json({ message: 'Customer successfully deleted' });
    });
  };