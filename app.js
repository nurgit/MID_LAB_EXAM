
var express 	= require('express');
var exSession 	= require('express-session');
var bodyParser 	= require('body-parser');
var login 		= require('./controller/login');
var admin 		= require('./controller/admin');
//var logout 		= require('./controller/logout');
var app 		= express();

//config
app.set('view engine', 'ejs');

//app.use('/abc', express.static('assets'));
//app.use('/abc/img', express.static('assets'));


//middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(exSession({secret: 'my secret value', saveUninitialized: true, resave: false}));


 app.use('/login', login);
 app.use('/admin', admin);
 //app.use('/employee', employee);
 //app.use('/logout', logout);





app.listen(3000, function(){
	console.log('express http server started at...3000');
});
