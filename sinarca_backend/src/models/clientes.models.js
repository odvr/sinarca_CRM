//Dependencias requeridas
const mongoose = require ("mongoose");
var Schema = mongoose.Schema;
//Generamos el esquema de las bases de datos
var ClientesSchema = Schema({
    
        nombre_clientes: String,
        correo_clientes: String,
        edad_clientes: Number,
        contra_clientes :String,
    
})
//Se exporta de modulo donde se encuentran el esquema
module.exports = mongoose.model("Clientes", ClientesSchema);