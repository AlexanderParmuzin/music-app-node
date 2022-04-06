const { Router } = require('express');

const songsController = require('../controllers/songs.controller');

const songsRouter = Router();

songsRouter.get('/', songsController.getAll); // Gets list of existing songs
songsRouter.post('/add-artist', songsController.create); // Creates new song
songsRouter.put('/:artistId', songsController.edit); // Edits song`s name
songsRouter.delete('/:artistId', songsController.delete); // Deletes song`s row from db

module.exports = songsRouter;
