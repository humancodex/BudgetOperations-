const { Router } = require("express");
const {
	postOperation,
	getOperations,
	deleteOp,
	editOperation,
} = require("../routes/controllers/_Operations");

const route = Router();

route.get("/", getOperations);
route.post("/create", postOperation);
route.put("/edit/:id", editOperation);
route.delete("/delete/:id", deleteOp);

module.exports = route;
