var exports = module.exports = {}

var product = require("../model/product.js");

exports.index = function(req, res) {
 
    res.render('index');
 
}
 
exports.signup = function(req, res) {
 
    res.render('signup');
 
}

exports.signin = function(req, res) {
 
    res.render('signin');
 
}

exports.products = function(req, res) {
    product.all(function (data) {
        var hbsObject = {
            products: data
        };
        res.render("products", hbsObject);
    });
}

exports.admin = function(req, res) {
 
    res.render('admin');
 
}

exports.logout = function(req, res) {
 
    req.session.destroy(function(err) {
 
        res.redirect('/');
 
    });
 
}