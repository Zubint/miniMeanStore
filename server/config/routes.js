var customers = require('./../controllers/customers.js');
var products = require('./../controllers/products.js');

//remember to require a controller for each new route.
//e.g. app.get("/customers") needs customers controller,
//app.get("/players") needs players controller

module.exports = function(app){

  app.get("/customers", customers.index);
  app.post("/customers", customers.create);
  app.post("/customers/:id/destroy", customers.destroy);

}
