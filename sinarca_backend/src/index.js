const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const user_routes = require("./routes/usuarios");
const gama_routes = require("./routes/gama.routes");
const barcos_routes = require("./routes/barcos.routes");
const clientes_routes = require("./routes/clientes.routes");
const reservas_routes = require("./routes/reservas.routes");

mongoose.Promise = global.Promise;
const port = 4000;

app.use(bodyParser.urlencoded({extended:false}));


mongoose.connect("mongodb://127.0.0.1:27017/sinarca",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    family:4
})
.then(()=>{
    app.use("/api",user_routes);
    app.use("/api-gama",gama_routes);
    app.use("/api-barcos",barcos_routes);
    app.use("/api-clientes",clientes_routes);
    app.use("/api-reservas",reservas_routes);

    app.listen(port, ()=>{
        console.log("Servidor en el puerto",port);
    });
})
.catch(error => console.log("ALGO PASA AMIGO"+error));

