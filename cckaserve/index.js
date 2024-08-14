const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const bcrypt = require("bcrypt");
const db = require("./database");

const app = express();
const PORT = process.env.PORT || 8080;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Route to clear the database
app.post("/api/clear", (req, res) => {
  db.run(`DELETE FROM users`, (err) => {
    if (err) {
      return res.status(500).send({ message: "Error clearing database" });
    }
    res.status(200).send({ message: "Database cleared successfully" });
  });
});

// Registration route
app.post("/api/register", async (req, res) => {
  const { email, password } = req.body;
  console.log(`Registering user: Email: ${email}, Password: ${password}`);

  if (!email || !password) {
    return res.status(400).send({ message: "Email and password are required" });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    db.run(
      `INSERT INTO users (email, password) VALUES (?, ?)`,
      [email, hashedPassword],
      function (err) {
        if (err) {
          if (err.message.includes("UNIQUE constraint failed")) {
            return res.status(400).send({ message: "Email already exists" });
          } else {
            return res.status(500).send({ message: "Database error" });
          }
        }

        res.status(201).send({ message: "User registered successfully" });
      }
    );
  } catch (error) {
    res.status(500).send({ message: "Error hashing password" });
  }
});

// Login route
app.post("/api/login", (req, res) => {
  const { email, password } = req.body;
  console.log(`Logging in user: Email: ${email}, Password: ${password}`);

  if (!email || !password) {
    return res.status(400).send({ message: "Email and password are required" });
  }

  db.get(`SELECT * FROM users WHERE email = ?`, [email], async (err, user) => {
    if (err) {
      return res.status(500).send({ message: "Database error" });
    }

    if (!user) {
      return res.status(400).send({ message: "Invalid email or password" });
    }

    try {
      const isPasswordMatch = await bcrypt.compare(password, user.password);
      if (isPasswordMatch) {
        res.status(200).send({ message: "Login successful" });
      } else {
        res.status(400).send({ message: "Invalid email or password" });
      }
    } catch (error) {
      res.status(500).send({ message: "Error checking password" });
    }
  });
});

// Root route
app.get("/", (req, res) => {
  res.send("Welcome to CourseCompass API!");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
