const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// ✅ Database connection
const db = mysql.createConnection({
  host: '127.0.0.1',
  port: 3306,
  user: 'root',
  password: 'root',
  database: 'cst391'
});

db.connect(err => {
  if (err) {
    console.error('❌ Database connection failed:', err);
    return;
  }
  console.log('✅ Connected to MySQL (cst391)');
});

//
// ================================
// USERS ROUTES
// ================================
//

// Get all users
app.get('/users', (req, res) => {
  db.query('SELECT * FROM users', (err, results) => {
    if (err) return res.status(500).send('DB error');

    // Transform DB rows into Angular's User model shape
    const users = results.map(r => ({
      id: r.Id,
      firstName: r.FirstName,
      lastName: r.LastName,
      email: r.Email,
      password: r.Password,
      phoneNumber: r.PhoneNumber,
      status: r.Status,
      creationDate: r.CreationDate,
      lastLoginDate: r.LastLoginDate
    }));

    res.json(users);
  });
});

// Get user by ID
app.get('/users/:id', (req, res) => {
  const sql = 'SELECT * FROM users WHERE Id = ?';
  db.query(sql, [req.params.id], (err, results) => {
    if (err) return res.status(500).send('DB error');
    res.json(results[0]);
  });
});

// Get user by email
app.get('/users/email/:email', (req, res) => {
  const sql = 'SELECT * FROM users WHERE Email = ?';
  db.query(sql, [req.params.email], (err, results) => {
    if (err) return res.status(500).send('DB error');
    res.json(results[0]);
  });
});

// Create user
app.post('/users', (req, res) => {
  const user = req.body;
  const sql = `
    INSERT INTO users (FirstName, LastName, Email, Password, PhoneNumber, Status, CreationDate, LastLoginDate)
    VALUES (?, ?, ?, ?, ?, ?, NOW(), NOW())
  `;
  db.query(sql, [user.firstName, user.lastName, user.email, user.password, user.phoneNumber, user.status], (err, result) => {
    if (err) return res.status(500).send('DB error');
    res.status(201).json({ message: 'User created', userId: result.insertId });
  });
});

// Update user
app.put('/users', (req, res) => {
  const user = req.body;
  const sql = `
    UPDATE users
    SET FirstName=?, LastName=?, Email=?, Password=?, PhoneNumber=?, Status=?, LastLoginDate=NOW()
    WHERE Id=?
  `;
  db.query(sql, [user.firstName, user.lastName, user.email, user.password, user.phoneNumber, user.status, user.id], (err) => {
    if (err) return res.status(500).send('DB error');
    res.json({ message: 'User updated' });
  });
});

// Delete user
app.delete('/users/:id', (req, res) => {
  db.query('DELETE FROM users WHERE Id=?', [req.params.id], (err) => {
    if (err) return res.status(500).send('DB error');
    res.json({ message: 'User deleted' });
  });
});

//
// ================================
// ESTATES ROUTES
// ================================
//

// Get all estates with owner info
app.get('/estates', (req, res) => {
  const estateId = req.query.estateId;
  let sql = `
    SELECT e.Id, e.Type, e.CostOfRent, e.PictureLocation, e.Address,
           u.Id AS OwnerId, u.FirstName, u.LastName, u.Email
    FROM estates e
    JOIN users u ON e.OwnerId = u.Id
  `;
  const params = [];

  if (estateId) {
    sql += ' WHERE e.Id = ?';
    params.push(estateId);
  }

  db.query(sql, params, (err, results) => {
    if (err) return res.status(500).send('DB error');

    const estates = results.map(r => ({
      id: r.Id,
      type: r.Type,
      ownerId: r.OwnerId,
      costOfRent: r.CostOfRent,
      pictureLocation: r.PictureLocation,
      address: r.Address,
      owner: {
        id: r.OwnerId,
        firstName: r.FirstName,
        lastName: r.LastName,
        email: r.Email
      }
    }));

    res.json(estateId ? estates[0] : estates);
  });
});

// Get estates by owner
app.get('/estates/owner/:ownerId', (req, res) => {
  const sql = `
    SELECT e.Id, e.Type, e.CostOfRent, e.PictureLocation, e.Address,
           u.Id AS OwnerId, u.FirstName, u.LastName, u.Email
    FROM estates e
    JOIN users u ON e.OwnerId = u.Id
    WHERE e.OwnerId = ?
  `;
  db.query(sql, [req.params.ownerId], (err, results) => {
    if (err) return res.status(500).send('DB error');

    const estates = results.map(r => ({
      id: r.Id,
      type: r.Type,
      ownerId: r.OwnerId,
      costOfRent: r.CostOfRent,
      pictureLocation: r.PictureLocation,
      address: r.Address,
      owner: {
        id: r.OwnerId,
        firstName: r.FirstName,
        lastName: r.LastName,
        email: r.Email
      }
    }));

    res.json(estates);
  });
});

// Create estate
app.post('/estates', (req, res) => {
  const estate = req.body;
  const sql = `
    INSERT INTO estates (Type, OwnerId, CostOfRent, PictureLocation, Address)
    VALUES (?, ?, ?, ?, ?)
  `;
  db.query(sql, [estate.type, estate.ownerId, estate.costOfRent, estate.pictureLocation, estate.address], (err, result) => {
    if (err) return res.status(500).send('DB error');
    res.status(201).json({ message: 'Estate created', estateId: result.insertId });
  });
});

// Update estate
app.put('/estates', (req, res) => {
  const estate = req.body;
  const sql = `
    UPDATE estates
    SET Type=?, OwnerId=?, CostOfRent=?, PictureLocation=?, Address=?
    WHERE Id=?
  `;
  db.query(sql, [estate.type, estate.ownerId, estate.costOfRent, estate.pictureLocation, estate.address, estate.id], (err) => {
    if (err) return res.status(500).send('DB error');
    res.json({ message: 'Estate updated' });
  });
});

// Delete estate
app.delete('/estates/:id', (req, res) => {
  db.query('DELETE FROM estates WHERE Id=?', [req.params.id], (err) => {
    if (err) return res.status(500).send('DB error');
    res.json({ message: 'Estate deleted' });
  });
});

//
// ================================
// START SERVER
// ================================
app.listen(3000, () => {
  console.log('✅ Backend API running on http://localhost:3000');
});