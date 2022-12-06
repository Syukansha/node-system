const mysql = require('mysql');

const con = mysql.createConnection({
    host: "localhost",
    user:"root",
    password: "",
    database:"maDB"
});

con.connect((err) =>{
    if(err) throw err;
    console.log('connected');

    const sql = "SELECT * FROM user";
    con.query(sql,(err,data,result) => {
        console.log(data);
    });
});