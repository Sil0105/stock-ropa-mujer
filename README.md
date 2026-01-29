 ## 📦 Stock de Ropa de Mujer – API REST

Este proyecto es una **API RESTful** desarrollada con **Node.js y Express** para gestionar el **stock de una tienda de ropa de mujer**.

Permite **listar, agregar, editar y eliminar prendas**, utilizando un archivo **JSON** como almacenamiento de datos.  
Además, cuenta con un **frontend básico** para visualizar y administrar los productos.

El proyecto fue realizado como **trabajo final de backend**, aplicando buenas prácticas, estructura modular y despliegue en la nube con **Render**.

---

## 🚀 Tecnologías utilizadas

- Node.js
- Express
- JavaScript
- JSON como almacenamiento de datos
- CORS
- Nodemon
- HTML, CSS y JavaScript (Frontend)

---

## 📁 Estructura del proyecto

```
STOCK-ROPA-MUJER/
│
├── backend/
│ ├── controllers/ → Lógica de los endpoints
│ ├── models/ → Lectura y escritura de datos (JSON)
│ ├── routes/ → Definición de rutas
│ ├── data/ → Archivo ropa.json (base de datos)
│ └── index.js → Archivo principal del servidor
│
├── frontend/
│ ├── css/ → Estilos
│ ├── js/ → Lógica del frontend
│ └── index.html → Interfaz principal
│
├── node_modules/
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```

---

## ⚙️ Instalación y ejecución

1. Clonar el repositorio:
```bash
git clone <URL_DEL_REPOSITORIO>
```

2. Instalar dependencias:
```bash
npm install
```

3. Ejecutar el servidor:
```bash
node backend/index.js
```

Servidor disponible en:
👉 http://localhost:3000

---

## 📌 Endpoints de la API

### 🔹 Listar todas las prendas
**GET** `/api/ropa`

### 🔹 Obtener prenda por ID
**GET** `/api/ropa/:id`

### 🔹 Crear una prenda
**POST** `/api/ropa`

```json
{
  "tipo": "Vestido",
  "talle": "M",
  "color": "Azul",
  "precio": 12000,
  "stock": 4
}
```

### 🔹 Editar una prenda
**PATCH** `/api/ropa/:id`

### 🔹 Eliminar una prenda
**DELETE** `/api/ropa/:id`

---

## 🔐 Seguridad y mejoras recomendadas

La API incluye validaciones básicas y manejo de errores.
El token a utilizar es: "6598"
Para futuras mejoras se recomienda:

- Implementar autenticación con **JWT**
- Crear rutas protegidas para operaciones de administrador
- Hashear contraseñas con **bcrypt**
- Validar datos con middleware
- Manejar variables sensibles con `.env`
- Migrar el JSON a una base de datos (MongoDB o PostgreSQL)

---

## ☁️ Despliegue en Render

- Repositorio conectado a Render
- Build Command: `npm install`
- Start Command: `node backend/index.js`

🔗 URL de la API: 
👉 https://stock-ropa-mujer.onrender.com

---

## 🌐 Frontend (opcional)

El frontend es estático y se comunica con la API para:

Visualizar las prendas en formato de tienda

Filtrar productos por talle

Mostrar estado de stock (disponible / bajo / sin stock)

Agregar y eliminar prendas (modo administrador)

Se desarrolló con HTML, CSS y JavaScript puro, simulando una tienda real.

---

## ✨ Ideas extra para seguir mejorando

Filtros por color y precio

Control de stock mínimo

Roles de usuario (admin / cliente)

Historial de cambios

Documentación completa con Swagger

## Ideas extra para seguir mejorando

Filtros por color y precio

Control de stock mínimo

Roles de usuario (admin / cliente)

Historial de cambios

Documentación completa con Swagger

## ✍️ Autor

~ Condori Silvana

~ Herrera Katherinne

~ Torres Ramonell Lourdes