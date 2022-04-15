const { Artist } = require('../../models');

const findArtistByName = async (artistName) => {
  const foundArtist = await Artist.findOne({
    raw: true,
    where: {
      artistName: artistName,
    },
  });

  return foundArtist;
};

const createArtist = async (artistName) => {
  const isArtistCreated = await Artist.create({
    artistName,
  });

  return isArtistCreated;
};

const createArtistService = {
  findArtistByName,
  createArtist,
};

module.exports = createArtistService;
