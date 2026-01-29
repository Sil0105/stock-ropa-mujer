// Importamos las funciones del modelo que manejan los datos (leer y guardar en JSON)
const { getAllRopa, saveRopa } = require("../models/ropaModel");

// ===============================
// CONFIGURACIÓN GENERAL
// ===============================

// Lista de talles permitidos
// 👉 Tiene que coincidir con la del frontend
const TALLES_VALIDOS = ["XS", "S", "M", "L", "XL"];

// ===============================
// GET - OBTENER TODA LA ROPA
// ===============================

const getRopa = (req, res) => {
  // Leemos todas las prendas desde el archivo JSON
  const ropa = getAllRopa();

  // Devolvemos la lista completa
  res.json(ropa);
};

// ===============================
// GET - OBTENER ROPA POR ID
// ===============================

const getRopaById = (req, res) => {
  const ropa = getAllRopa();

  // Obtenemos el id desde los parámetros de la URL
  const id = req.params.id;

  // Buscamos la prenda que coincida con el id
  const prenda = ropa.find(r => r.id == id);

  // Si no existe, devolvemos error 404
  if (!prenda) {
    return res.status(404).json({ message: "Prenda no encontrada" });
  }

  // Si existe, la devolvemos
  res.json(prenda);
};

// ===============================
// POST - CREAR NUEVA PRENDA
// ===============================

const createRopa = (req, res) => {
  const ropa = getAllRopa();

  // Extraemos los datos enviados desde el frontend
  const { tipo, talle, color, precio, stock } = req.body;

  // ---------------- VALIDACIÓN DE TALLE ----------------
  // Convertimos el talle a mayúscula por seguridad
  const talleUpper = talle.toUpperCase();

  // Verificamos que el talle sea válido
  if (!TALLES_VALIDOS.includes(talleUpper)) {
    return res.status(400).json({
      message: `Talle inválido. Los talles permitidos son: ${TALLES_VALIDOS.join(", ")}`
    });
  }

  // Creamos la nueva prenda
  const newRopa = {
    id: Date.now(), // id único
    tipo,
    talle: talleUpper,
    color,
    precio,
    stock
  };

  // Agregamos la prenda al array
  ropa.push(newRopa);

  // Guardamos los cambios en el archivo JSON
  saveRopa(ropa);

  // Respondemos con status 201 (creado)
  res.status(201).json(newRopa);
};

// ===============================
// PATCH - ACTUALIZAR PRENDA
// ===============================

const updateRopa = (req, res) => {
  const ropa = getAllRopa();
  const id = req.params.id;

  // Buscamos la prenda a actualizar
  const index = ropa.findIndex(r => r.id == id);

  // Si no existe, error 404
  if (index === -1) {
    return res.status(404).json({ message: "Prenda no encontrada" });
  }

  // ---------------- VALIDACIÓN DE TALLE (SI SE ENVÍA) ----------------
  if (req.body.talle) {
    const talleUpper = req.body.talle.toUpperCase();

    if (!TALLES_VALIDOS.includes(talleUpper)) {
      return res.status(400).json({
        message: `Talle inválido. Los talles permitidos son: ${TALLES_VALIDOS.join(", ")}`
      });
    }

    // Reemplazamos el talle validado
    req.body.talle = talleUpper;
  }

  // Actualizamos solo los campos enviados
  ropa[index] = { ...ropa[index], ...req.body };

  // Guardamos cambios
  saveRopa(ropa);

  // Devolvemos la prenda actualizada
  res.json(ropa[index]);
};

// ===============================
// DELETE - ELIMINAR PRENDA
// ===============================

const deleteRopa = (req, res) => {
  const ropa = getAllRopa();
  const id = req.params.id;

  // Eliminamos la prenda filtrando el array
  const nuevaRopa = ropa.filter(r => r.id != id);

  // Guardamos el nuevo array
  saveRopa(nuevaRopa);

  // Respondemos sin contenido
  res.status(204).send();
};

// ===============================
// EXPORTACIONES
// ===============================

module.exports = {
  getRopa,
  getRopaById,
  createRopa,
  updateRopa,
  deleteRopa
};

