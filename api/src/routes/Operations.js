const { Router } = require("express");
const {
	postOperation,
	getOperations,
	deleteOp,
	editOperation,
} = require("../routes/controllers/_Operations");

const server = Router();


server.get("/", getOperations);
server.post("/create", postOperation);
server.put('/edit/:id',editOperation)
server.delete("/delete/:id", deleteOp);

module.exports = server;
