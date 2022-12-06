const mysql = require('mysql');

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "madb"
});

con.connect((err) => {
  if (err) throw err;
  console.log("Connected!");
  //con.query("CREATE DATABASE kanshaDB",(err, result) => {
  //  if (err) throw err;
  //  console.log("Database created");
});
