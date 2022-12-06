const mysql = require('mysql');

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "maDB"
  });
  
  con.connect((err) => {
    if (err) throw err;
    console.log("Connected!");
    //const sql = "CREATE TABLE user2 (name VARCHAR(255),age INT(255))";
    const sql = "ALTER TABLE user ADD COLUMN addr VARCHAR(255)";
    con.query(sql,(err, result) => {
      if (err) throw err;
      console.log("Database created");
    });
  });