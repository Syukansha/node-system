const mysql = require('mysql');

const con =mysql.createConnection({
    host: 'localhost',
    user:'root',
    password:'',
    database:'madb'
});

con.connect((err) =>{
    if(err) throw err;
    console.log('connected');

    const sql = "DELETE FROM customer WHERE addr='bangi'";
    con.query(sql,(err,data) => {
        if(err) throw err;
        console.log("number of records that deleted:"+data.affectedRows);
    });
});