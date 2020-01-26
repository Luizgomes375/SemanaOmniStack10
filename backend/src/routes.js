const { Router } = require('express');
const routes = Router()
const Dev = require('./models/Dev')
const DevController = require('./controllers/DevController')
const SearchController = require('./controllers/SearchController')

//() => // eron function
// routes.get('/', (request, response) => {
//     return response.json({ message: 'SERVER ON' }) // instalar o jason viewer no chrome
// });
//usando crazes com template string
routes.get('/devs', DevController.index)
routes.post('/devs', DevController.store)

routes.get('/search', SearchController.index)

module.exports = routes