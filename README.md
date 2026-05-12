Instalación
1. Clonar repositorio
git clone (https://github.com/LaraLopez10/Parcial_Programacion1_Lopez)
2. Entrar a la carpeta
cd Parcial_Programacion_Lopez
3. Instalar dependencias
npm install

Dependencias utilizadas
npm install express cors mysql2

Configuración de MySQL

1 Crear una base de datos llamada:

CREATE DATABASE parcial_programacion;

2 Luego crear la tabla:

CREATE TABLE celulares (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100),
    precio DECIMAL(10,2),
    stock INT
);

INSERT INTO celulares (id, nombre, precio, stock) VALUES
(1, 'iPhone 13', 540.00, 20),
(2, 'iPhone 12', 450.00, 2),
(6, 'Motorola G22', 150.00, 3),
(7, 'Samsung S24 Fe', 600.00, 14);


Configuración de conexión

En el archivo db.js configurar:

const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'parcial_programacion'
});

module.exports = db;

Ejecutar el proyecto
Iniciar servidor
node index.js

Servidor funcionando en:

http://localhost:3000