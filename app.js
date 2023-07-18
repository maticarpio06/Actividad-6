const express = require('express');
const app = express();
const { auth } = require("express-oauth2-jwt-bearer");
const jwtCheck = auth({
  audience: 'http://localhost:3000/libros',
  issuerBaseURL: 'https://dev-dwnpg31uuxqpekrh.us.auth0.com/',
  tokenSigningAlg: 'RS256'
});

app.use(express.json());

const librosRouter = require('./routes/libros');
const errorHandler = require('./middlewares/errorHandler');
app.use('/libros', jwtCheck, librosRouter);
app.use(errorHandler);
app.listen(3000, () => {
console.log('Servidor iniciado en el puerto 3000');
});