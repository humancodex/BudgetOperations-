const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const userServer = require("./User");
const operationServer = require("./Operations");

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/user', operationServer)
router.use("/operation", operationServer);

module.exports = router;
