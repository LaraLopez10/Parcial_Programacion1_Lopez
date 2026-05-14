#  Parcial Programación - CRUD de Celulares

Este proyecto es una API REST de celulares hecha con Node.js, Express y MySQL.

El sistema permite:

* Ver todos los celulares
* Buscar celulares por ID
* Agregar celulares
* Editar celulares
* Eliminar celulares

## Tecnologías utilizadas

### Frontend

* HTML
* Bootstrap
* JavaScript

### Backend

* Node.js
* Express

### Base de datos

* MySQL

---

# Instalación

## 1. Clonar el repositorio

```bash
git clone https://github.com/LaraLopez10/Parcial_Programacion1_Lopez
```

## 2. Entrar a la carpeta del proyecto

```bash
cd Parcial_Programacion_Lopez
```

## 3. Instalar dependencias

```bash
npm install
```

## Dependencias utilizadas

```bash
npm install express cors mysql2
```

---

# Configuración de MySQL

## Crear la base de datos

```sql
CREATE DATABASE parcial_programacion;
```

## Crear la tabla

```sql
CREATE TABLE celulares (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100),
    precio DECIMAL(10,2),
    stock INT
);
```

## Insertar algunos datos

```sql
INSERT INTO celulares (id, nombre, precio, stock) VALUES
(1, 'iPhone 13', 540.00, 20),
(2, 'iPhone 12', 450.00, 2),
(6, 'Motorola G22', 150.00, 3),
(7, 'Samsung S24 Fe', 600.00, 14);
```

---

# Configurar conexión con MySQL

En el archivo `db.js`:

```javascript
const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'parcial_programacion'
});

module.exports = db;
```

---

# Ejecutar el proyecto

Iniciar servidor:

```bash
node index.js
```

Servidor funcionando en:

```bash
http://localhost:3000
```

---

# Endpoints

## Obtener todos los celulares

```http
GET /celulares
```

## Obtener un celular por ID

```http
GET /celulares/:id
```

## Agregar celular

```http
POST /celulares
```

## Actualizar celular

```http
PUT /celulares/:id
```

## Eliminar celular

```http
DELETE /celulares/:id
```



