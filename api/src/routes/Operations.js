const { Router } = require("express");
const { postOperation } = require("../routes/controllers/_Operations");

const server = Router();

server.post("/create");
server.post("/");

module.exports = server;
