// ===============================
// IMPORTACIONES
// ===============================

// Importamos Express para poder usar Router
const express = require("express");

// Creamos una instancia del Router
// El Router nos permite definir rutas separadas del index.js
const router = express.Router();

// Importamos las funciones del controller
// Cada función maneja una acción del CRUD
const {
  getRopa,
  getRopaById,
  createRopa,
  updateRopa,
  deleteRopa
} = require("../controllers/ropaController");

// ===============================
// RUTAS DE ROPA
// ===============================

// ---------------- GET ----------------
// Obtener todas las prendas
// Permite filtros por query params (talle, color, stock)
router.get("/", getRopa);

// ---------------- GET ----------------
// Obtener una prenda específica por su ID
router.get("/:id", getRopaById);

// ---------------- POST ----------------
// Crear una nueva prenda
// Usado principalmente por el administrador
router.post("/", createRopa);

// ---------------- PATCH ----------------
// Actualizar una prenda existente
router.patch("/:id", updateRopa);

// ---------------- DELETE ----------------
// Eliminar una prenda por ID
router.delete("/:id", deleteRopa);

// ===============================
// EXPORTACIÓN
// ===============================

// Exportamos el router para usarlo en index.js
module.exports = router;



/*// Importamos Express
const express = require("express");

// Creamos un router para manejar rutas de forma modular
const router = express.Router();

// Importamos las funciones del controlador
// Cada función se encarga de la lógica de un endpoint
const {
  getRopa,
  getRopaById,
  createRopa,
  updateRopa,
  deleteRopa
} = require("../controllers/ropaController");

// ---------------- ENDPOINTS ----------------

// Obtener todas las prendas
// GET /api/ropa
router.get("/", getRopa);

// Obtener una prenda por ID
// GET /api/ropa/:id
router.get("/:id", getRopaById);

// Crear una nueva prenda
// POST /api/ropa
router.post("/", createRopa);

// Editar una prenda existente
// PATCH /api/ropa/:id
router.patch("/:id", updateRopa);

// Eliminar una prenda
// DELETE /api/ropa/:id
router.delete("/:id", deleteRopa);

// Exportamos el router para usarlo en index.js
module.exports = router;
*/