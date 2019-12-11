var express = require('express');
var app = express();
var passport = require('passport')
var session = require('express-session')
var bodyParser = require('body-parser')
var exphbs = require('express-handlebars')

var PORT = process.env.PORT || 8080;

//For BodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// For Passport
app.use(session({ secret: 'keyboard cat', resave: true, saveUninitialized: true })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions

//For Handlebars
app.set('views', './views')
app.engine('handlebars', exphbs({
    extname: '.handlebars'
}));
app.set('view engine', '.handlebars');

app.use(express.static("public"));

app.get('/', function (req, res) {

    res.send('Welcome to Passport with Sequelize');

});

//Models
var models = require("./models");

//Routes
var authRoute = require('./routes/auth.js')(app,passport);

//load passport strategies
require('./config/passport/passport.js')(passport, models.user);

//Sync Database
models.sequelize.sync().then(function () {

    console.log('Nice! Database looks fine')

}).catch(function (err) {

    console.log(err, "Something went wrong with the Database Update!")

});

app.listen(PORT, function () {
    console.log("Sever is listening at http://localhost:" + PORT);
});