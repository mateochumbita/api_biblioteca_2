const express = require("express");
const { auth } = require("express-oauth2-jwt-bearer");
const errorHandler = require("./middleware/errorHandler");
// Configuracion Middleware con el Servidor de Autorización
const autenticacion = auth({
    audience: ' http://127.0.0.1:3000/libros',
    issuerBaseURL: 'https://dev-x0mviegg5t5zajj2.us.auth0.com/',
    tokenSigningAlg: 'RS256'
});
const app = express();
app.use(express.json());
// Importamos el Router de Libros
const librosRouter = require("./routes/libros");
//Configuramos el middleware de autenticacion
app.use("/libros", autenticacion, librosRouter);
app.use(errorHandler);
app.listen(3000, () => {
    console.log("Servidor iniciado en el puerto 3000");
});