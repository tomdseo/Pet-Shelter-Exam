const petController = require('../controllers/petController');

module.exports = function (app) {
    app.post('/api/pet/create', petController.createPet);

    app.get('/api/pet/read', petController.readAllPet);

    app.get('/api/pet/read/:id', petController.readPet);

    app.put('/api/pet/update/:id', petController.updatePet);

    app.delete('/api/pet/delete/:id', petController.deletePet);
};
