const sqlite3 = require('sqlite3').verbose();

// open database in memory
let db = new sqlite3.Database('./db/test.db', (err) => {
    if (err) {
        return console.error(err.message);
    }
    console.log('Connected to the SQlite database.');
});

 
const getList = () => {
    let sql = 'SELECT DISTINCT Name name FROM playlists ORDER BY name';
    db.all(sql, [], (err, rows) => {
      if (err) {
        throw err;
      }
      rows.forEach((row) => {
        console.log(row.name);
      });
    });
}

module.exports = { getList }
