const { getAllRopa, saveRopa } = require("../models/ropaModel");

// GET - obtener toda la ropa
const getRopa = (req, res) => {
  const ropa = getAllRopa();
  res.json(ropa);
};

// GET - obtener prenda por id
const getRopaById = (req, res) => {
  const ropa = getAllRopa();
  const id = req.params.id;

  const prenda = ropa.find(r => r.id == id);

  if (!prenda) {
    return res.status(404).json({ message: "Prenda no encontrada" });
  }

  res.json(prenda);
};

// POST - crear prenda
const createRopa = (req, res) => {
  const ropa = getAllRopa();

  const newRopa = {
    id: Date.now(),
    tipo: req.body.tipo,
    talle: req.body.talle,
    color: req.body.color,
    precio: req.body.precio,
    stock: req.body.stock
  };

  ropa.push(newRopa);
  saveRopa(ropa);

  res.status(201).json(newRopa);
};

// PATCH - actualizar prenda
const updateRopa = (req, res) => {
  const ropa = getAllRopa();
  const id = req.params.id;

  const index = ropa.findIndex(r => r.id == id);

  if (index === -1) {
    return res.status(404).json({ message: "Prenda no encontrada" });
  }

  ropa[index] = { ...ropa[index], ...req.body };
  saveRopa(ropa);

  res.json(ropa[index]);
};

// DELETE - eliminar prenda
const deleteRopa = (req, res) => {
  const ropa = getAllRopa();
  const id = req.params.id;

  const nuevaRopa = ropa.filter(r => r.id != id);
  saveRopa(nuevaRopa);

  res.status(204).send();
};

module.exports = {
  getRopa,
  getRopaById,
  createRopa,
  updateRopa,
  deleteRopa
};
