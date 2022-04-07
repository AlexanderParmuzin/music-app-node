const createSongService = require('./songs.services/createSong.service');
const getAllSongsService = require('./songs.services/getAllSongs.service');
const editSongService = require('./songs.services/editSong.service');
const deleteSongService = require('./songs.services/deleteSong.service');

const songsService = {
  create: createSongService.createSong,
  getByName: createSongService.findSongByName,
  getAll: getAllSongsService,
  getById: editSongService.findSongById,
  edit: editSongService.updateSong,
  delete: deleteSongService
};

module.exports = songsService;
