var ORM = require("../config/orm.js")

var burger = {
    addBurger: function (burgerName) {
        ORM.insertOne('burgers', 'burger_name', burgerName, function (data) {


        })
    },
    consumeBurger: function (id, value, cb) {
        ORM.updateOne('burgers', 'devoured', value, id, function (result) {
            cb(result);
        })
    },

    getBurgers: function (consumed, cb) {
        ORM.selectAll('burgers', 'devoured', consumed, function (result) {
            cb(result);
        })

    }
}




module.exports = burger;