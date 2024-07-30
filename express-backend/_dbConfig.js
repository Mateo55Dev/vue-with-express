const mysql = require('mysql2');

// Konfiguracja połączenia z bazą danych
const dbConfig = {
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'test'
};

// Utwórz połączenie z bazą danych
const db = mysql.createConnection(dbConfig);

// Połącz z bazą danych i obsłuż błędy
db.connect(err => {
  if (err) {
    console.error('Błąd połączenia z bazą danych:', err);
    process.exit(1); // Zakończ aplikację w przypadku błędu połączenia
  }
  console.log('Połączono z bazą danych MySQL');
});

module.exports = db;
