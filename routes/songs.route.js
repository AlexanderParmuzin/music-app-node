const { Router } = require('express');
const songController = require('../controllers/songs.controller');

const songsController = require('../controllers/songs.controller');

const songsRouter = Router();

songsRouter.get('/', songsController.getAll); // Gets list of existing songs
songsRouter.post('/add-song', songsController.create); // Creates new song
songsRouter.put('/:songId', songsController.edit); // Edits song`s name
songsRouter.delete('/:songId', songsController.delete); // Deletes song`s row from db

songsRouter.post('/get-song', songController.getOne); // Gets song json with related artist, if there are multiple songs with same name - will json both

module.exports = songsRouter;
