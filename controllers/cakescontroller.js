//a Separate responsibility  for  Cake  HTTP request handling

var Cake = require('../dal/cakesdal');

exports.getAll = function(request, response) {
      console.log("calling controller function");
          Cake.getAllCakes(function(err, cake) {
                  if (err)
                  response.send(err);
                  // response.send(cake);
                  response.json(cake)
          });
};

exports.insert = function(request, response) {
 

  var new_Cake = new Cake(request.body);
  console.log(new_Cake);

  console.log(JSON.stringify(new_Cake));

  
    Cake.createCake(new_Cake, function(err, cake) {
      if (err)
      response.send(err);
      response.json(cake);
    });
  
};

exports.getBy = function(request, response) {
  Cake.getCakeById(request.params.cake_id, function(err, cake) {
    if (err)
    response.send(err);
    // response.json(cake);
    response.send(cake);
  });
};

exports.update = function(req, res) {
  Cake.updateById(req.params.id, new Cake(req.body), function(err, cake) {
    if (err)
      res.send(err);
    res.json(cake);
  });
};

exports.remove = function(request, response) {
    Cake.remove( request.params.id, function(err, cake) {
    if (err)
    response.send(err);
    response.json(cake);
  });
};