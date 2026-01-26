const fs = require("fs");
const path = "./backend/data/ropa.json";

const getAllRopa = () => {
  const data = fs.readFileSync(path);
  return JSON.parse(data);
};

const saveRopa = (ropa) => {
  fs.writeFileSync(path, JSON.stringify(ropa, null, 2));
};

module.exports = {
  getAllRopa,
  saveRopa
};

