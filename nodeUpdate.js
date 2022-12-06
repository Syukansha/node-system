const mysql = require('mysql');

const con = mysql.createConnection({
    host: 'localhost',
    user:'root',
    password:'',
    database:'madb'
});

con.connect((err) =>{
    if(err) throw err;
    console.log('connected');
    
    const sql = "UPDATE user SET name='al' WHERE age=23 ";
    con.query(sql,(err,result) => {
        if(err) throw err;
        console.log(result);
    });
});