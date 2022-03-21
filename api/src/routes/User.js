const { Router } = require("express");
const { getUsers, registerUser, loginUser ,protected, logOut} = require("./controllers/_User");
const { registerValidation, loginValidation } = require("../validators/_auth");
const { validationMiddleware } = require("../middlewares/validations-middleware");

const {userAuth} = require("../middlewares/auth-middleware")


const route = Router();

route.get("/get-users", getUsers);
route.post("/register", registerValidation, validationMiddleware, registerUser);
route.post("/login", loginValidation, validationMiddleware, loginUser);
route.get("/protected", userAuth, protected);
route.get("/logout", userAuth, logOut);

module.exports = route;
