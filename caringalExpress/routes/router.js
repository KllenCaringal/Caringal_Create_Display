const express = require('express');
const routes = express.Router();
const controller = require('./controller/Kcontroller');

routes.get('/', controller.index);
routes.get('/display', controller.display);
routes.get('/create', controller.create);
routes.post('/save', controller.save);


module.exports = routes;