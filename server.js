const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// Datos de prueba (libros)
const libros = [
    { id: 1, titulo: "Clean Code", autor: "Robert C. Martin" },
    { id: 2, titulo: "Arquitectura Limpia", autor: "Robert C. Martin" },
    { id: 3, titulo: "JavaScript: The Good Parts", autor: "Douglas Crockford" },
    { id: 4, titulo: "El Programador Pragmático", autor: "Andrew Hunt" }
];

// Endpoint que consumirá tu PWA
app.get('/api/libros', (req, res) => {
    res.json(libros);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`API corriendo en el puerto ${PORT}`);
});