const mysql = require('mysql');

const con = mysql.createConnection({
    host : 'localhost',
    user:'root',
    password:'',
    database:'madb'
});

con.connect((err) =>{
    if(err) throw err;
    console.log('connected');

    const sql = "SELECT * FROM customer ORDER BY addr";
    con.query(sql,(err,data) =>{
        if(err) throw err;
        console.log(data);
    });
});