
/*
**
*Dependencias requeridas se igualan a la constante de Gama que implementaremos para instanciar el esquema de las bases de datos
*/
const Reservas = require("../models/reservas.models");
//se declara una variable donde permitirá exportar el módulo de controlador 
var controllerReservas = {
    //Función que permite guardar las gamas de los barcos 
    guardarReservas:function(req,res){
    // Generamos una nueva variable donde instanciamos con la constante del esquema
    let reservas = new Reservas();
    /**
     * La propiedad req.body contiene pares clave-valor de datos enviados en el cuerpo de la solicitud. De forma predeterminada, no está definido y se completa cuando usa un middleware llamado análisis de cuerpo
     */
    reservas.fecha_inicio = req.body.fecha_inicio;
    reservas.fecha_fin = req.body.fecha_fin;  
    reservas.save((err, reservasStored) => {
         return res.status(200).send({
            
            reservas: reservasStored
       
      });  

    }   
    )},
    // Funcion que permite  Visualizar las Reservas
    VerReservas:function(req,res){
        Reservas.find(function(err,reservas){
            
            return res.status(200).send({
                reservas
            });
        })
       
    }



}

module.exports = controllerReservas;