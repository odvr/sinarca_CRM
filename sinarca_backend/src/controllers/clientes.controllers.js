
/*
**
*Dependencias requeridas se igualan a la constante de Gama que implementaremos para instanciar el esquema de las bases de datos
*/
const Clientes = require("../models/clientes.models");
//se declara una variable donde permitirá exportar el módulo de controlador 
var controllerClientes = {

    //Función que permite guardar las gamas de los barcos 
    guardarClientes:function(req,res){ 
    // Generamos una nueva variable donde instanciamos con la constante del esquema
    let clientes = new Clientes();
    /**
     * La propiedad req.body contiene pares clave-valor de datos enviados en el cuerpo de la solicitud. De forma predeterminada, no está definido y se completa cuando usa un middleware llamado análisis de cuerpo
     */
    clientes.nombre_clientes = req.body.nombre_clientes;
    clientes.correo_clientes = req.body.correo_clientes;
    clientes.edad_clientes = req.body.edad_clientes;
    clientes.contra_clientes = req.body.contra_clientes;
   
    clientes.save((err, clientesStored) => {
    
      
         return res.status(200).send({
            
            clientes: clientesStored
       
      });
      

      
    }   
    )},
    // Funcion que permite  Visualizar los clientes
    VerClientes:function(req,res){
        Clientes.find(function(err,clientes){
            
            return res.status(200).send({
                clientes
            });
        })
       
    }



}

module.exports = controllerClientes;