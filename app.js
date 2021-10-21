const express = require ("express");
const path = require ("path");
const app = express();
const publicPath = path.resolve( __dirname, "./public");

app.use ( express.static(publicPath) );
 
app.listen (2500, () => {console.log("Servidor corriendo en el puerto 2500")});

app.get("/", (req , res) => {
    res.sendFile( path.resolve (__dirname, "./views/home.html"))
});