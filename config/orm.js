var connection = require("../config/connection.js");


var ORM = {
    selectAll: function (tableInput, orderBy, cb) {
        var queryString = "SELECT * FROM ?? ORDER BY ?? asc";
        connection.query(queryString, [tableInput, orderBy], function (err, res) {
            if (err) throw err;
            cb(res)
        });
    },

    insertOne: function (table, col1, val1, cb) {
        var queryString = "INSERT INTO ?? ( ??) VALUES (?) ";
        connection.query(queryString, [table, col1, val1], function (err, result) {
            if (err) throw err;
            cb({
                msg: "insertion succesful"
            })
        });
    },
    updateOne: function (table, col1, val1, id, cb) {
        var queryString =
            "UPDATE ?? SET ?? = ? WHERE id = ?";

        connection.query(
            queryString, [table, col1, val1, id],
            function (err, result) {
                if (err) throw err;
                cb({
                    msg: "update succesful"
                })
            }
        );
    }
}


module.exports = ORM;