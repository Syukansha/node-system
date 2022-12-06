const mysql = require('mysql');

const con = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'madb'
});

con.connect((err) =>{
    if(err) throw err;
    console.log('connected');

    const sql = "SELECT user.name AS user,user2.addr AS address FROM user JOIN user2 ON user.address= place";
    con.query(sql,(err,data)=>{
        if(err) throw err;
        console.log(data);
    });
});