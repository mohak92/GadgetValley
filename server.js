var express = require('express');
var app = express();
var passport = require('passport')
var session = require('express-session')
var bodyParser = require('body-parser')
var exphbs = require('express-handlebars')

//Models
var models = require("./models");

var PORT = process.env.PORT || 8080;

//Routes
var authRoute = require('./routes/auth.js')(app);

app.use(express.static("public"));

//For BodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// For Passport
app.use(session({ secret: 'keyboard cat', resave: true, saveUninitialized: true })); // session secret

app.use(passport.initialize());

app.use(passport.session()); // persistent login sessions

app.get('/', function (req, res) {

    res.send('Welcome to Passport with Sequelize');

});

//For Handlebars
app.set('views', './views')
app.engine('handlebars', exphbs({
    extname: '.handlebars'
}));
app.set('view engine', '.handlebars');

//Sync Database
models.sequelize.sync().then(function () {

    console.log('Nice! Database looks fine')

}).catch(function (err) {

    console.log(err, "Something went wrong with the Database Update!")

});

app.listen(PORT, function () {
    console.log("Sever is listening at http://localhost:" + PORT);
});