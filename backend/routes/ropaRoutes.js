const express = require("express");
const router = express.Router();
const  authMiddleware=require("../middwares/auth-middleware");

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
router.patch("/:id",  authMiddleware, updateRopa);
router.delete("/:id", authMiddleware, deleteRopa);

module.exports = router;
