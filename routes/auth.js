var authController = require('../controllers/authcontroller.js');

module.exports = function (app, passport) {

    app.get('/signup',isLoggedOut ,authController.signup);
    app.get('/signin',isLoggedOut ,authController.signin);
    app.get('/dashboard', isLoggedIn, authController.dashboard);
    app.get('/logout', authController.logout);

    app.get('/admin', isAdmin, authController.admin);

    app.post('/signup', passport.authenticate('local-signup', {
        successRedirect: '/dashboard',

        failureRedirect: '/signup'
    }

    ));

    app.post('/signin', passport.authenticate('local-signin', {
        successRedirect: '/dashboard',

        failureRedirect: '/signin'
    }

    ));

    function isAdmin(req, res, next) {
        if (req.user.isAdmin 
            && req.isAuthenticated()){
                console.log("Inside If");
                return next();
            }
        res.redirect('/dashboard')
    }

    function isLoggedIn(req, res, next) {

        if (req.isAuthenticated())

            return next();

        res.redirect('/signin');

    }

    function isLoggedOut(req, res, next) {

        if (!req.isAuthenticated())

            return next();

        res.redirect('/dashboard');

    }
}