const createSongController = require('./songs.controllers/createSong.controller');
const getAllSongsController = require('./songs.controllers/getAllSongs.controller')
const editSongController = require('./songs.controllers/editSong.controller')
const deleteSongController = require('./songs.controllers/deleteSong.controller')
const getOneSongController = require('./songs.controllers/getOneSong.controller')


const songController = {
  create: createSongController,
  delete: deleteSongController,
  edit: editSongController,
  getAll: getAllSongsController,
  getOne: getOneSongController,
};

module.exports = songController;
