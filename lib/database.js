require('dotenv').config();

const mysql = require('mysql');

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

db.connect( (err) => {
  if (err) {
    console.error('Errore nella connessione al database:', err);
    return;
  }
  console.log('Connessione al database stabilita');
});

module.exports = db;