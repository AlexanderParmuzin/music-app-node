const { Artist } = require('../../models');

const getOneArtistService = async (artistName) => {
  const artist = await Artist.findAll({
    attributes: ['id', 'artistName'],
    include: 'songs',
    where: {
      artistName,
    },
  });
  return artist;
};

module.exports = getOneArtistService;
