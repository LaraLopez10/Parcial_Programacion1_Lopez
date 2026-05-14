//INDEX.JS
const express = require('express');
const cors    = require('cors');
const db      = require('./db');

const app = express();
app.use(cors());
app.use(express.json()); // leer body JSON en POST

// GET todos los celular
app.get('/celulares', (req, res) => {
  db.query('SELECT * FROM celulares', (err, resultados) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(resultados);
  });
});

// GET un celular por ID
app.get('/celulares/:id', (req, res) => {
  const { id } = req.params;
  db.query('SELECT * FROM celulares WHERE id = ?', [id], (err, r) => {
    if (err) return res.status(500).json({ error: err.message });
    if (r.length === 0) return res.status(404).json({ error: 'No encontrado' });
    res.json(r[0]);
  });
});

// POST crear celular
app.post('/celulares', (req, res) => {
  const { nombre, precio, stock } = req.body;
  const sql = 'INSERT INTO celulares (nombre, precio, stock) VALUES (?, ?, ?)';
  db.query(sql, [nombre, precio, stock], (err, r) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ id: r.insertId, nombre, precio, stock });
  });
});

// DELETE eliminar celular
app.delete('/celulares/:id', (req, res) => {
  const { id } = req.params;
  db.query('DELETE FROM celulares WHERE id = ?', [id], (err, r) => {
    if (err) return res.status(500).json({ error: err.message });
    if (r.affectedRows === 0) return res.status(404).json({ error: 'No encontrado' });
    res.json({ mensaje: 'Eliminado correctamente' });
  });
});

app.put('/celulares/:id', (req, res) => {
  const { id } = req.params;
  const { nombre, precio, stock } = req.body;
  const sql = `
    UPDATE celulares
    SET nombre = ?, precio = ?, stock = ?
    WHERE id = ?
  `;
  db.query(sql, [nombre, precio, stock, id], (err, r) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (r.affectedRows === 0) {
      return res.status(404).json({
        error: 'No encontrado'
      });
    }
    res.json({
      mensaje: 'Actualizado correctamente'
    });
  });

});



app.listen(3000, () => console.log('Servidor en http://localhost:3000/'))