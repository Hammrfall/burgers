var express = require("express")
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");

var app = express(); 
var PORT = process.env.PORT || 8080;;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

require('./controllers/burgers_controller.js')(app); 

app.listen(PORT, function(){
	console.log('App listening on PORT ' + PORT);
});