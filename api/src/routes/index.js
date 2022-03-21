const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const userRoutes = require("./User");
const operationRoutes = require("./Operations");

const server = Router();

server.use("/user", userRoutes);

server.use("/operation", operationRoutes);

module.exports = server;
