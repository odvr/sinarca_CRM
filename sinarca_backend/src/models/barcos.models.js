//Dependencias requeridas
const mongoose = require ("mongoose");
var Schema = mongoose.Schema;
//Generamos el esquema de las bases de datos
var BarcosSchema = Schema({
    
        marca_barco: String,
        nombre_barco: String,
        anio: Number,
        descripcion_barco :String,
    
})
//Se exporta de modulo donde se encuentran el esquema
module.exports = mongoose.model("Barcos", BarcosSchema);