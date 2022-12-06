const mysql = require('mysql');

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "madb"
  });

  con.connect((err) => {
    if (err ) throw err;
    console.log("connected");

    const sql = "INSERT INTO user (userid,password) VALUES ?";
    const values = [
      ['al','password'],
      ['ab','password'],
      ['zak','password'],
      ['oh','password'],
      ['sall','password'],
      ['koko','password']
    ];
    con.query(sql,[values],(err,data) =>{
        if(err) throw err;
        console.log('have been insert');
    });
  });