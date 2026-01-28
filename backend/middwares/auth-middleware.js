const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(403).json({ message: "Se requiere token" });
  }

  if (token !== "6598") {
    return res.status(403).json({ message: "El token es invalido" });
  }

  next();
};

module.exports = authMiddleware;