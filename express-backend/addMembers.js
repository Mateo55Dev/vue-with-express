const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./_dbConfig'); // Importuj konfigurację bazy danych

const app = express();
const port = 3001; // Możesz użyć innego portu, aby uniknąć konfliktów z `server.js`

// Użyj CORS i skonfiguruj, aby zezwalał na żądania z http://localhost:5173
app.use(cors({
  origin: 'http://localhost:5173'
}));

// Użyj body-parser do przetwarzania danych JSON w ciele żądania
app.use(bodyParser.json());

// Endpoint do dodawania rekordów do bazy danych
app.post('/api/addMembers', (req, res) => {
  const { name, value } = req.body;

  if (!name || !value) {
    return res.status(400).json({ error: 'Name and value are required' });
  }

  const sql = 'INSERT INTO records (name, value) VALUES (?, ?)';
  db.query(sql, [name, value], (err, results) => {
    if (err) {
      console.error('Błąd podczas zapytania do bazy danych:', err);
      return res.status(500).json({ error: 'Błąd serwera' });
    }
    res.status(201).json({ id: results.insertId, name, value });
  });
});

app.listen(port, () => {
  console.log(`Serwer działający na porcie ${port}`);
});
