const express = require('express');
const routes = express.Router();

const userController = require('./Controller/userController');
const stationController = require('./Controller/stationController');
const feedbackController = require('./Controller/feedbackController');



routes.get('/users',userController.index);
routes.get('/users/:id',userController.show);
routes.post('/users',userController.store);
routes.put('/users/:id',userController.update);
routes.delete('/users/:id',userController.destroy);

routes.post('/stations',stationController.store);
routes.get('/stations',stationController.index);
routes.get('/stations/:id',stationController.show);
routes.put('/stations/:id',stationController.update);
routes.delete('/stations/:id',stationController.destroy);

routes.get('/comment/:stationid',feedbackController.index);
routes.post('/comment/:userid/:stationid',feedbackController.store);
routes.put('/comment/:idavalia',feedbackController.update);
routes.delete('/comment/:idavalia',feedbackController.destroy);


module.exports = routes;