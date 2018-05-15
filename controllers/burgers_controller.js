var burgers = require("../models/burger.js")
var path = require('path');

module.exports = function (app) {

  app.get('/api/burgers/:value', function (req, res) {
    burgers.getBurgers(req.params.value, function (result) {
      res.json(result);
    });

  });

  app.post('/api/burger', function (req, res) {

  });
  //return result


  app.put('/api/consume/:id/:value', function (req, res) {
    burgers.consumeBurger(req.params.id, req.params.value,function(result){
    res.json(result)
    })
  });


}