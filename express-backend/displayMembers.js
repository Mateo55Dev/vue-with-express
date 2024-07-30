const express = require('express');
const cors = require('cors');
const db = require('./_dbConfig'); // Importuj konfigurację bazy danych

const app = express();
const port = 3000;

// Użyj CORS i skonfiguruj, aby zezwalał na żądania z http://localhost:5173
app.use(cors({
  origin: 'http://localhost:5173'
}));

// Użyj body-parser do przetwarzania danych JSON w ciele żądania
app.use(express.json());

// Endpoint do pobierania rekordów z bazy danych
app.get('/api/members', (req, res) => {
  const sql = 'SELECT * FROM members';
  db.query(sql, (err, results) => {
    if (err) {
      console.error('Błąd podczas zapytania do bazy danych:', err);
      return res.status(500).json({ error: 'Błąd serwera' });
    }
    res.json(results);
  });
});

app.listen(port, () => {
  console.log(`Serwer działający na porcie ${port}`);
});
