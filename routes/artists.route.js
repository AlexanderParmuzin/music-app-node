const { Router } = require('express');

const artistController = require('../controllers/artists.controller');

const artistsRouter = Router();

artistsRouter.get('/', artistController.getAll); // Gets list of existing artists
artistsRouter.post('/add-artist', artistController.create); // Creates new artist
artistsRouter.put('/:artistId', artistController.edit); // Edits artist`s name
artistsRouter.delete('/:artistId', artistController.delete); // Deletes artist`s row from db

module.exports = artistsRouter;
