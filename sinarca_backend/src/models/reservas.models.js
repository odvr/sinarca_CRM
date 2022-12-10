//Dependencias requeridas
const mongoose = require ("mongoose");
var Schema = mongoose.Schema;
//Generamos el esquema de las bases de datos
var ReservasSchema = Schema({
    
        fecha_inicio: Date,
        fecha_fin: Date

    
})
//Se exporta de modulo donde se encuentran el esquema
module.exports = mongoose.model("Reservas", ReservasSchema);