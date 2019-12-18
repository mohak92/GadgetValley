var exports = module.exports = {}

var user = require("../model/user.js");

exports.allusers = function(req, res) {
    user.all(function (data) {
        var hbsObject = {
            users: data
        };
        res.render("allusers", hbsObject);
    });
}

exports.addproducts = function(req, res) {
 
    res.render('addproducts');
 
}

exports.allorders = function(req, res) {
 
    res.render('allorders');
 
}