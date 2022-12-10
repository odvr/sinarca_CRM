
/*
**
*Dependencias requeridas se igualan a la constante de Gama que implementaremos para instanciar el esquema de las bases de datos
*/
const Barcos = require("../models/barcos.models");
//se declara una variable donde permitirá exportar el módulo de controlador 
var controllerBarcos = {

    //Función que permite guardar las gamas de los barcos 
    guardarBarco:function(req,res){
    // Generamos una nueva variable donde instanciamos con la constante del esquema
    let barcos = new Barcos();
    /**
     * La propiedad req.body contiene pares clave-valor de datos enviados en el cuerpo de la solicitud. De forma predeterminada, no está definido y se completa cuando usa un middleware llamado análisis de cuerpo
     */
    barcos.marca_barco = req.body.marca_barco;
    barcos.nombre_barco = req.body.nombre_barco;
    barcos.anio = req.body.anio;
    barcos.descripcion_barco = req.body.descripcion_barco;
   
    barcos.save((err, barcosStored) => {
    
      
         return res.status(200).send({
            
            barcos: barcosStored
       
      });
      

      
    }   
    )},
    // Funcion que permite  Visualizar las barcos
    VerBarcos:function(req,res){
        Barcos.find(function(err,barcos){
            
            return res.status(200).send({
                barcos
            });
        })
       
    }



}

module.exports = controllerBarcos;