const { Router } = require("express");

const { getUsers, registerUser, login, logOut} = require("./controllers/_User");
const { registerValidation, loginValidation } = require("../validators/_auth");
const { validationMiddleware } = require("../middlewares/validations-middleware");

const route = Router();



route.get("/get-users", getUsers);

route.post("/register", registerValidation, validationMiddleware, registerUser);

route.post("/login", loginValidation, validationMiddleware, login);

route.get("/logout", logOut);

module.exports = route;
