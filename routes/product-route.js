// Import the model (product.js) to use its database functions.
var product = require("../model/product.js");

module.exports = function (app, passport) {

    app.post("/addproducts", function(req, res) {
        product.create([
          "title", "description", "image", "type", "stock", "price"
        ], [
          req.body.title, req.body.description, req.body.image, req.body.type,
          req.body.stock, req.body.price
        ], function(result) {
          // Send back the ID of the new quote
          res.json({ id: result.insertId });
        });
      });

}