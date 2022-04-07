const Artist = require('../../models/artist');
const Song = require('../../models/song');

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

const updateArtist = async (artistName) => {
  const updatedArtist = await Artist.increment('songsCount', {
    by: 1,
    where: { artistName: artistName },
  });
  return updatedArtist;
};

const createSong = async (artistName, songName) => {
  const isSongCreated = await Song.create({
    artistName: artistName,
    songName: songName,
  });

  if (!isSongCreated) {
    return null;
  }

  const updatedArtist = await updateArtist(artistName);

  return updatedArtist;
};

const createSongService = {
  findSongByName,
  createSong,
};

module.exports = createSongService;
