var mysql = require('mysql');
var dbconfig = require('./config/database');
var connection = mysql.createConnection(dbconfig.connection);
connection.query('USE ' + dbconfig.database);
var insertQuery = "INSERT INTO usuarios ( username, password ) values (?,?)";
connection.query(
    "DELETE FROM usuarios",
    function (err) {
        if (err) throw err;
        console.log("datos borrados");
    }
);
connection.query(insertQuery, ["diego", "1234"], function (err, rows) {
    if (err) throw err;
    console.log(rows);
});
connection.query(insertQuery, ["marcelo", "1234"], function (err, rows) {
    if (err) throw err;
    console.log(rows);
});
connection.query(
    "UPDATE usuarios SET password=123 WHERE username=?",
    ["marcelo"],
    function (err) {
        if (err) throw err;
        console.log("password cambiada");
    }
);
connection.query("SELECT * FROM usuarios", function (err, rows) {
    if (err) throw err;
    console.log(rows);
});
connection.end();