const mysql = require('mysql');

module.exports = class Mysql {
  static connect() {
    // establish connection
    const db = mysql.createConnection({
      host: 'localhost',
      user: 'tarun1',
      password: 'rootroot',
      database: 'cumsdbms',
    });
    // connect to database
    db.connect((err) => {
      if (err) {
        console.log("Error r",err)
        throw err;
      }
      console.log('Mysql Connected');
    });
    return db;
  }
};
