var adminController = require('../controllers/admincontroller.js');

module.exports = function (app, passport) {
    app.get('/allusers', isAdmin, adminController.allusers);

    app.get('/addproducts', isAdmin, adminController.addproducts);

    app.get('/allorders', isAdmin, adminController.allorders);

    function isAdmin(req, res, next) {
        if (req.user.isAdmin
            && req.isAuthenticated()) {
            console.log("Inside If");
            return next();
        }
        res.redirect('/products')
    }

    function isLoggedIn(req, res, next) {

        if (req.isAuthenticated())

            return next();

        res.redirect('/signin');

    }

    function isLoggedOut(req, res, next) {

        if (!req.isAuthenticated())

            return next();

        res.redirect('/products');

    }
}
