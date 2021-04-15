const express = require('express');
const bodyParser = require('body-parser');
const db = require('./infra/bd');
const app = express;
const port = 3000;
const usuarioController = require('./controllers/usuarioController');
const tarefaController = require('./controllers/tarefaUsuario');
const { nextTick } = require('node:process');

app.use(bodyParser.json());
app.use(logRequest);

function logRequest(req,res,next){
    console.log(req.method);
    next();
}

usuarioController(app,db);
tarefaController(app,db);

app.listen(port,() =>{
    console.log(`app listening at http://localhost:${port}`);
})