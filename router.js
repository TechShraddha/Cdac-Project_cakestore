// API routes for Controller callback functions
//a Separate responsibility  for navigation

var cakesController=require("./controllers/cakescontroller");
var customersController=require("./controllers/customersController");
var loginController=require("./controllers/logincontroller");
var ordersController=require("./controllers/orderscontroller");

//get the app object of express from server.js

module.exports=function(app){
    
    

/************************************LOGIN****************************************** */
    //login  HTTP request Mapping
    //http://localhost:9796/api/login
    app.route("/api/login")
    .post(loginController.insert);

/****************************************CAKES************************************** */

    //Cakes HTTP request Mapping 
       
    app.route("/api/cakes")              
    .get(cakesController.getAll)           //http://localhost:9796/api/cakes/       GET  
    .post(cakesController.insert);         //http://localhost:9796/api/cakes/       POST

    app.route('/api/cakes/:id')
    .get(cakesController.getBy)           //http://localhost:9796/api/cakes/:id    GET
    .put(cakesController.update)          //http://localhost:9796/api/cakes/:id    PUT
    .delete(cakesController.remove);      //http://localhost:9796/api/cakes/:id    DELETE    



  /***************************************CUSTOMERS*************************************** */


    //Customers HTTP request Mapping 
    app.route("/api/customers")              
    .get(customersController.getAll)           //http://localhost:9796/api/customers/       GET  
    .post(customersController.insert);         //http://localhost:9796/api/customers/       POST

    app.route('/api/customers/:email')
    .get(customersController.getByEmail);

    
    app.route('/api/customers/:id')
    .get(customersController.getBy)           //http://localhost:9796/api/customers/:id    GET
    .put(customersController.update)          //http://localhost:9796/api/customers/:id    PUT
    .delete(customersController.remove);      //http://localhost:9796/api/customers/:id    DELETE 


  /***************************************ORDERS*************************************** */

    // Orders HTTP request Mapping 
    app.route("/api/orders")              
    .get(ordersController.getAll)           //http://localhost:9796/api/orders/       GET  
    .post(ordersController.insert);         //http://localhost:9796/api/orders/       POST

    app.route('/api/orders/:id')
    .get(ordersController.getBy)           //http://localhost:9796/api/orders/:id       GET
    // .put(ordersController.update)          //http://localhost:9796/api/orders/:id    PUT
    .delete(ordersController.remove);      //http://localhost:9796/api/orders/:id       DELETE 

  /****************************************************************************** */

    
    //ShopingCart HTTP request Mapping 
    //Payments HTTP request Mapping 
};


  //Express Routing is a mechanism to mapping incomming HTTP requests with appropriate controller functions
