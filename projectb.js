
var request = require('request');
var express = require('express');
var mysql = require('mysql');
var pool = mysql.createPool({
	host 	:	'localhost',
	user 	:	'student',
	password:	'default',
	database:	'student'
});
var handlebars = require('express-handlebars').create({defaultLayout:'main'});
var session= require('express-session');
var bodyParser = require('body-parser');
module.exports.pool = pool;

var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'));

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.set('port', 3030);


// ---- Training Modules ----

// Import constructor function
var TrainingModulesController = require('./controllers/trainingModules.js');
// Import data accessor object
var trainingModulesDataAccessor = require('./models/trainingModule.js');
// Create controller, passing in data accessor
var trainingModulesController = new TrainingModulesController(trainingModulesDataAccessor);
// Register routes
app.get('/training-modules', trainingModulesController.index.bind(trainingModulesController));
app.get('/training-modules/:moduleID', trainingModulesController.trainingModule.bind(trainingModulesController));


app.get('/', function(req, res, next){
	var context = {
        homeActive: true
    };
	res.render('home',context);
});

app.use(function(req,res){
  res.status(404);
  res.render('404');
});

app.use(function(err, req, res, next){
  console.error(err.stack);
  res.type('plain/text');
  res.status(500);
  res.render('500');
});

app.listen(app.get('port'), function(){
  console.log('Express started on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate.');
});
