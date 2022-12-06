const mysql = require('mysql');

const con = mysql.createConnection({
    host:'localhost',
    user: 'root',
    password:'',
    database:'madb'
});

con.connect((err)=>{
    if(err) throw err;
    console.log('connected');
    
    const sql = "SELECT * FROM user LIMIT 5 OFFSET 2";
    con.query(sql,(err,data)=>{
        if(err) throw err;
        console.log(data);
    });
});