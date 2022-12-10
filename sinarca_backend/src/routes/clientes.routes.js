var express = require("express");
var GamaController = require("../controllers/clientes.controllers");

var routerGamas = express.Router();

routerGamas.get("/ListarClientes", GamaController.VerClientes);
routerGamas.post("/GuardarClientes", GamaController.guardarClientes);

module.exports = routerGamas;
