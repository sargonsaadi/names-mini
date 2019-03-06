var express = require('express');
var bodyParser = require('body-parser');
var path =require('path');
var session = require('express-session');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// SESSION
app.set('trust proxy', 1) // trust first proxy
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
//   cookie: { maxAge: 600000 }
  cookie: {  }

}))

// app.use(express.static( __dirname + '/AngularApp/dist/AngularApp' ));  // <------ CONNECTS WITH ANGULAR APP
app.use(express.static(path.join(__dirname, './static')));

// app.set('views', path.join(__dirname, './views'));
// app.set('view engine', 'ejs');
// mongoose.Promise = global.Promise;

// require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);


app.all("*", (req,res,next) => {
    res.sendFile(path.resolve("./static/index.html"))
});

var server = app.listen(8000,function(){
    var host = server.address().address;
    var port = server.address().port;
    console.log("listening http://%s:%s", host, port);
});