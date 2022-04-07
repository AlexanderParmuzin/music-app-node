const createSongController = require('./songs.controllers/createSong.controller');
const getSongsController = require('./songs.controllers/getAllSongs.controller')
const editSongController = require('./songs.controllers/editSong.controller')
const deleteSongController = require('./songs.controllers/deleteSong.controller')


const songController = {
  create: createSongController,
  delete: deleteSongController,
  edit: editSongController,
  getAll: getSongsController,
};

module.exports = songController;
