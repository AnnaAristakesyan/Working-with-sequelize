const client = require('./db');

client.query('SELECT NOW()', (err, res) => {
  if (err) {
    console.error(err);
  } else {
    console.log('Current time from database:', res.rows[0]);
  }
  client.end();  
});
