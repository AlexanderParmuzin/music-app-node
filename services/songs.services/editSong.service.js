const { Song } = require('../../models');

const findSongById = async (originalSongId) => {
  const foundSong = Song.findOne({
    raw: true,
    where: {
      id: originalSongId,
    },
  });
  return foundSong;
};

const updateSong = async (newSongName, originalSongId) => {
  const updatedSong = await Song.update(
    {
      songName: newSongName,
    },
    {
      where: {
        id: originalSongId,
      },
    }
  );
  return updatedSong;
};

const editSongService = {
  findSongById,
  updateSong,
};

module.exports = editSongService;
