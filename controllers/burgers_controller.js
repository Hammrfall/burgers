var burgers = require("../models/burger.js")
var path = require('path');

module.exports = function (app) {

app.get('/', function (req, res) {
  burgers.getBurgers(function (data) {
    var hbsObject = {
      burgers: data
    };
    
    res.render("index", hbsObject);
  });
});

app.get('/css', function (req, res){
  res.sendFile(path.join(__dirname, '../public/assets/css/burger_style.css'));

})

app.get('/js', function (req, res){
  res.sendFile(path.join(__dirname, '../public/assets/JS/client.js'));

})

app.get('/burger/image', function (req,res){
  res.sendFile(path.join(__dirname, '../public/assets/img/burger.png'))
})

app.get('/background/image', function (req,res){
  res.sendFile(path.join(__dirname,'../public/assets/img/halftone-yellow.png'))
})

app.get('/api/burgers', function (req, res) {
  burgers.getBurgers(function (result) {
    res.json(result);
  });

});

app.post("/api/newburger", function (req, res) {
  var newName = req.body.name;
  burgers.addBurger(newName)
});
//return result


app.put('/api/consume/:id', function (req, res) {
 console.log(req.params.id + ": " + req.body.value)
  burgers.consumeBurger(req.params.id, req.body.value, function (result) {
    res.json(result)
  })
});


}