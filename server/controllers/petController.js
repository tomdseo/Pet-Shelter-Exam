const mongoose = require('mongoose');
const PetModel = mongoose.model('PetDocument');

module.exports = {
    createPet: function (req, res) {
        PetModel.create(req.body)
            .then(pet => {
                res.json(pet)
            })
            .catch(e => {
                const errors = [];

                for (key in e.errors) {
                    errors.push(e.errors[key].message);
                }
                res.json({
                    errors
                })
            })
    },

    readAllPet: function (req, res) {
        PetModel.find()
            .sort('type')
            .then(pet => res.json(pet))
            .catch(err => res.json(err));
    },

    readPet: function (req, res) {
        PetModel.findById(req.params.id)
            .then(pet => res.json(pet))
            .catch(err => res.json(err));
    },

    updatePet: function (req, res) {
        PetModel.updateOne({
            _id: req.params.id
        }, {
            $set: {
                name: req.body.name,
                type: req.body.type,
                description: req.body.description,
                skill1: req.body.skill1,
                skill2: req.body.skill2,
                skill3: req.body.skill3,
                likes: req.body.likes
            }
        }, {
            new: true,
            runValidators: true
        })
            .then(pet => {
                res.json({
                    pet
                })
            })
            .catch(e => {
                const errors = [];

                for (key in e.errors) {
                    errors.push(e.errors[key].message);
                }
                res.json({
                    errors
                })
            })
    },

    deletePet: function (req, res) {
        PetModel.deleteOne({
            _id: req.params.id
        })
            .then(() => {
                res.redirect('/pet')
            })
            .catch(err => res.json(err));
    },

}