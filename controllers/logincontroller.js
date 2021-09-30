
var Login = require('../dal/logindal');


exports.insert = function(request, response) {
    var new_Login = new Login(request.body);
    console.log(JSON.stringify(new_Login));
    
  
    //handles null error 
    //  if(new_Customer.firstname != null &&  new_Customer.firstname !='' || new_Customer.lastname != null &&  new_Customer.lastname !='' || new_Customer.email != null &&  new_Customer.email !='' || new_Customer.contactno != null &&  new_Customer.contactno !='' || new_Customer.password != null &&  new_Customer.password !='' || new_Customer.cpassword != null &&  new_Customer.cpassword !=''){
    //     response.status(400).send({ error:true, message: 'Please provide Complete Customer/status' });
    //   }
    //  else{
        Login.createLogin(new_Login, function(err, Login) {
        if (err)
        response.send(err);
        // response.json(Login);
        // response.send(JSON.stringify(Login));
        response.send(Login);
      });
    // }
  };