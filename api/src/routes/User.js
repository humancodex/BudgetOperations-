const { Router } = require("express");
const server = Router();

server.get("/", (req, res) => {
	res.send("Hello!");
});
