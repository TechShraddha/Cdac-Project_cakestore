//a Separate responsibility  for  Cakes database crud operation
var sql = require('./mysqlconnect');

//model
//Object Oriented Approach
//define Model 
var Cake = function(Cake){

    //Constructor

   // this.cake_id=Cake.cake_id;
    this.category_id=Cake.category_id;
    this.title = Cake.title;
    this.description = Cake.description;
    this.quantity_in_stock = Cake.quantity_in_stock;
    this.unit_price = Cake.unit_price;
    this.active=Cake.active;
    this.imageurl= Cake.imageurl;
    this.likes= Cake.likes;
};

//Attach member function to Model to perform DatABASE  CRUD operations

Cake.createCake = function (newCake, result) {  
        console.log("New flower to be added ");
        console.log(newCake);
        
      //  let cake_id=newCake.cake_id;
        let category_id=newCake.category_id;
        let title = newCake.title;
        let description = newCake.description;
        let quantity_in_stock = newCake.quantity_in_stock;
        let unit_price = newCake.unit_price;
        let active=newCake.active;
        let imageurl= newCake.imageurl;
        let likes= newCake.likes;


    
        var Cake1 = [category_id, title, description, quantity_in_stock, unit_price, active, imageurl, likes];
        console.log(Cake1);
        var query1 = 'INSERT INTO cakes (category_id, title, description, quantity_in_stock, unit_price, active, imageurl, likes) VALUES ( ?, ?, ?, ?, ?, ?, ?, ?)';
        sql.query(query1, Cake1, function (err, response) {
                if(err) {
                  console.log("error: ", err);
                  result(err, null);
                }
                else{
                  console.log(response.insertId);
                  result(null, response.insertId);
                }
            });           
};

Cake.getAllCakes = function (result) {
    console.log("Invoking dal getall Cakes");
    
      sql.query("Select * from cakes", function (err, response) {
              if(err) {
                console.log("error: ", err);
                result(null, err);
              }
              else{
                console.log('Cakes : ', response);  
                result(null, response);
              }
          });   
};


Cake.getCakeById = function (cake_id, result) {
        sql.query("Select * from cakes where cake_id = ? ", cake_id, function (err, response) {             
                if(err) {
                  console.log("error: ", err);
                  result(err, null);
                }
                else{
                      result(null, response);     
                }
            });   
};

Cake.updateById = function(cake_id, Cake, result){

  sql.query("UPDATE cakes SET title = ? WHERE cake_id = ?", [Cake.title, cake_id], 
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


Cake.remove = function(cake_id, result){
    sql.query("DELETE FROM cakes WHERE cake_id = ?", [cake_id],
                function (err, response) {
                  if(err) {
                      console.log("error: ", err);
                      result(null, err);
                  }
                  else{
                      result(null, response);
                  }
            }); 
};

module.exports=Cake;