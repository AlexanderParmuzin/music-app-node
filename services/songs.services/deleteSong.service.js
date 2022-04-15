const { Song } = require('../../models');

const deleteSongService = async (songId) => {
  const deletedSong = await Song.destroy({
    where: {
      id: songId,
    },
  });
  return deletedSong;
};

module.exports = deleteSongService;
