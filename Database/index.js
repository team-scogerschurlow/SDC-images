const mysql= require('mysql');

var connection = mysql.createConnection({
    database: 'heroes',
    user: 'root'
});

connection.connect(function(err){
    if(err) {
        console.error('error connection: ' + err.stack);
        return;
    }
    console.log('connected as id ' + connectionthreadID);
});


module.exports = connection;
 