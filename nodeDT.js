const mysql = require('mysql');

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database:'madb'
});

con.connect((err) => {
    if(err) throw err;
    console.log('connsected');

    const sql = "DROP TABLE IF EXISTS customer ";
    con.query(sql,(err,data,result) => {
        if(err) throw err;
        console.log(data,result);
        console.log('table has been deleted');
    });
});