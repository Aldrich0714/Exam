const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

// Connect to database
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err.message);
    return process.exit(1);
  }
  console.log('✅ MySQL database connected successfully');
});

// Handle connection errors
connection.on('error', (err) => {
  console.error('DB connection error:', err.message);
  if (err.code === 'PROTOCOL_CONNECTION_LOST') {
    console.log('Reconnecting...');
    // Optional: location.reload() but for Node, manual restart
  }
});

module.exports = connection;

