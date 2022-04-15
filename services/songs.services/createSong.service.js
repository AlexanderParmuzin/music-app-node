const { Artist, Song } = require('../../models');

const findSongByName = async (artistName, songName) => {
  const foundSong = await Song.findOne({
    raw: true,
    where: {
      artistName: artistName,
      songName: songName,
    },
  });

  return foundSong;
};

const createSong = async (artistName, songName, artistId) => {
  const isSongCreated = await Song.create({
    artistName,
    songName,
    artistId,
  });

  if (!isSongCreated) {
    return null;
  }

  return isSongCreated;
};

const createSongService = {
  findSongByName,
  createSong,
};

module.exports = createSongService;
