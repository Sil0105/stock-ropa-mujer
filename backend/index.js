const express = require("express");
const cors = require("cors");

const ropaRoutes = require("./routes/ropaRoutes");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Rutas
app.use("/api/ropa", ropaRoutes);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
