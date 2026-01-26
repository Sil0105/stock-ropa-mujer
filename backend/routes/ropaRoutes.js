const express = require("express");
const router = express.Router();

const {
  getRopa,
  getRopaById,
  createRopa,
  updateRopa,
  deleteRopa
} = require("../controllers/ropaController");

// Endpoints
router.get("/", getRopa);
router.get("/:id", getRopaById);
router.post("/", createRopa);
router.patch("/:id", updateRopa);
router.delete("/:id", deleteRopa);

module.exports = router;
