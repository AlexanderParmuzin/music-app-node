const { Song, Artist } = require('../../models');

const getAllSongsService = async () => {
  const songs = await Song.findAll({
    attributes: ['id', 'artistName', 'songName', 'artistId'],
    include: 'artist',
  });
  return songs;
};

module.exports = getAllSongsService;
