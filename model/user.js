// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var user = {
  all: function(cb) {
    orm.all("users", function(res) {
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) {
    orm.update("users", objColVals, condition, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (adminController.js).
module.exports = user;