var exports = module.exports = {}

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
 
    res.render('products');
 
}

exports.admin = function(req, res) {
 
    res.render('admin');
 
}

exports.logout = function(req, res) {
 
    req.session.destroy(function(err) {
 
        res.redirect('/');
 
    });
 
}