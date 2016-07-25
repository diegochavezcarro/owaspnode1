var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/blog', function (err) {
    if (err) { console.error("error! " + err) }
});

//Load mongodb model schema
var User = require('./modelo/user');

function mostrarUsuarios() {
    User.find(function (err, users) {
        if (err)
            console.log(err);
        console.log("usuarios ingresados");
        console.log(users);
    });

    User.findOne({ login: 'dchavez' }, 'name')
        .exec(function (err, user) {
            if (err) console.log(err);
            if (user != null) {
                console.log(user);
            }
            borrarUsuarios();
        });
}

function borrarUsuarios() {
    //mongoose.connection.close();
    User.remove({}, function (err) {
        console.log('se borraron los datos de la collection')
    });
    mongoose.connection.collection('users').drop(function (err) {
        console.log('collection dropped');
    });
}

var user = new User();
user.name = "Diego";
user.login = "dchavez";
user.password = "1234";
user.save(function (err) {
    if (err)
        console.log(err);
    console.log("usuario Diego ingresado");
    console.log(user);
});

var user2 = new User();
user2.name = "Marcelo";
user2.login = "pepe";
user2.password = "1234";
user2.save(function (err) {
    if (err)
        console.log(err);
    console.log("usuario Marcelo ingresado");
    console.log(user2);
});

var user3 = new User();
user3.name = "Ernesto";
user3.login = "pan";
user3.password = "1234";
user3.save(function (err) {
    if (err)
        console.log(err);
    console.log("usuario Ernesto ingresado");
    console.log(user3);
    mostrarUsuarios();
});


process.on('SIGINT', function () {
    mongoose.connection.close(function () {
        console.log('Mongoose default connection disconnected through app termination');
        process.exit(0);
    });
});



