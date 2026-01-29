// Importamos el módulo fs (File System) de Node.js
// fs sirve para leer y escribir archivos en la computadora
const fs = require("fs");

// Definimos la ruta del archivo JSON
// Este archivo funciona como nuestra base de datos
const path = "./backend/data/ropa.json";

// ========================
// OBTENER TODA LA ROPA
// ========================
const getAllRopa = () => {
  // Leemos el archivo ropa.json
  // readFileSync lee el archivo de forma sincronizada
  const data = fs.readFileSync(path, "utf-8");

  // Convertimos el texto JSON a un objeto de JavaScript
  return JSON.parse(data);
};

// ========================
// GUARDAR LA ROPA
// ========================
const saveRopa = (ropa) => {
  // Convertimos el array de ropa a JSON
  // null, 2 es solo para que quede prolijo y legible
  fs.writeFileSync(path, JSON.stringify(ropa, null, 2));
};

// Exportamos las funciones
// Así pueden usarse desde el controller
module.exports = {
  getAllRopa,
  saveRopa
};



/*// Importamos el módulo fs (File System) de Node.js
// Sirve para leer y escribir archivos
const fs = require("fs");

// Ruta del archivo JSON que funciona como base de datos de ropa
const path = "./backend/data/ropa.json";

// ---------------- GET ----------------
// Obtener toda la ropa desde el archivo JSON
const getAllRopa = () => {
    // Leemos el contenido del archivo (formato texto) y lo parseamos a un objeto JavaScript
  const data = fs.readFileSync(path);

    // Convertimos el texto JSON en un objeto JavaScript y lo retornamos
  return JSON.parse(data);
};

// ---------------- SAVE ----------------
// Guardar la lista de ropa en el archivo JSON
const saveRopa = (ropa) => {
  // Convertimos el objeto JS a JSON
  // null, 2 sirve para que el archivo quede bien formateado (con saltos de línea e indentación)
  fs.writeFileSync(path, JSON.stringify(ropa, null, 2));
};

// Exportamos las funciones para que las use el controlador
module.exports = {
  getAllRopa,
  saveRopa
}; */
