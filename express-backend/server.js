const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
const port = 3000;

// Użyj CORS
app.use(cors({
    origin: 'http://localhost:5173'
  }));

// Konfiguracja połączenia z bazą danych
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'test'
});

db.connect(err => {
  if (err) {
    console.error('Błąd połączenia z bazą danych:', err);
    return;
  }
  console.log('Połączono z bazą danych MySQL');
});

// Endpoint, który zwraca rekordy z bazy danych
app.get('/api/members', (req, res) => {
  const sql = 'SELECT * FROM members';
  db.query(sql, (err, results) => {
    if (err) {
      return res.status(500).json({ error: err });
    }
    res.json(results);
  });
});

app.listen(port, () => {
  console.log(`Serwer działa na porcie ${port}`);
});
