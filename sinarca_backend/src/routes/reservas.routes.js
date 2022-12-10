var express = require("express");
var ReservasController = require("../controllers/reservas.controllers");

var routerReservas = express.Router();

routerReservas.get("/ListarReservas", ReservasController.VerReservas);
routerReservas.post("/GuardarReserva", ReservasController.guardarReservas);

module.exports = routerReservas;