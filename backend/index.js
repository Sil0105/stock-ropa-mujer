// ===============================
// IMPORTACIONES
// ===============================

// Importamos Express
// Express es el framework que usamos para crear el servidor y la API
const express = require("express");

// Importamos CORS
// CORS permite que un frontend (por ejemplo desde otro puerto)
// pueda hacer peticiones a nuestra API sin errores de seguridad
const cors = require("cors");

// Importamos las rutas de ropa
// Este archivo contiene todos los endpoints relacionados con prendas
const ropaRoutes = require("./routes/ropaRoutes");

//Importamos el middleware de error
const errorMiddleware=require("./middwares/error-middleware");

const path=require("path");

require("dotenv").config();

// ===============================
// CONFIGURACIÓN DEL SERVIDOR
// ===============================

// Creamos la aplicación de Express
const app = express();

// Definimos el puerto donde va a correr el servidor
const PORT = process.env.PORT || 3000;

// ===============================
// MIDDLEWARES
// ===============================

// Middleware CORS
// Permite que otros orígenes accedan a la API
app.use(cors());

// Middleware para leer datos en formato JSON
// Gracias a esto podemos usar req.body en POST y PATCH
app.use(express.json());

const frontendPath = path.resolve(__dirname, "../frontend");
console.log("📁 Frontend path:", frontendPath);

app.use(express.static(frontendPath));

// ===============================
// RUTAS
// ===============================

// Todas las rutas que empiecen con /api/ropa
// serán manejadas por ropaRoutes
app.use("/api/ropa", ropaRoutes);
app.get("/", (req, res)=>{
  res.sendFile(path.join(frontendPath, "index.html"));
});
app.use(errorMiddleware);


// ===============================
// INICIO DEL SERVIDOR
// ===============================

// Levantamos el servidor y lo ponemos a escuchar en el puerto definido


app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
