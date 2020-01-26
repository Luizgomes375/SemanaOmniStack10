const express = require('express');
const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);
const routes = require('./routes')
const app = express();
app.use(express.json()); // Para o express entender requisições JSON
app.use(routes)

mongoose.connect('mongodb+srv://luiz:admin@cluster0-ewowo.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
app.listen(3333);





// Métodos HTTTP: GET, POST, PUT, DELETE
//Tipos de parametros:
//Query Params: req.query (filtros, ordenação, paginação...)
//Rout Params: request.params (identificar um recurso na alteração ou remoção)
//Body: request.body (dados para criação ou alteração de um registro)
//MongoDB(Não relacional)
//yarn add nodemon -D Dependencia de desenvolvimento