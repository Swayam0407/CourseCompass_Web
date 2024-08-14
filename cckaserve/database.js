const sqlite3 = require("sqlite3").verbose();

// Create and open the database
const db = new sqlite3.Database("./users.db", (err) => {
  if (err) {
    console.error("Error opening database:", err.message);
  } else {
    console.log("Connected to the SQLite database.");

    // Create the users table if it doesn't exist
    db.run(
      `CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      email TEXT NOT NULL UNIQUE,
      password TEXT NOT NULL
    )`,
      (err) => {
        if (err) {
          console.error("Error creating table:", err.message);
        } else {
          console.log("Table created or already exists.");
        }
      }
    );
  }
});

module.exports = db;
