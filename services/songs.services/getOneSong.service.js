const { Song } = require('../../models');

const getAllSongsService = async (songName) => {
  const songs = await Song.findAll({
    attributes: ['id', 'artistName', 'songName', 'artistId'],
    includes: 'artist',
    where: {
      songName,
    },
  });
  return songs;
};

module.exports = getAllSongsService;
