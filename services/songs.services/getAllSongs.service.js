const Song = require('../../models/song');

const getAllSongsService = async () => {
  const songs = await Song.findAll({
    attributes: ['id', 'artistName', 'songName'],
  });
  return songs;
};

module.exports = getAllSongsService;
