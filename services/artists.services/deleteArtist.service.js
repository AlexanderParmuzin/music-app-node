const Artist = require('../../models/artist');

const deleteArtistService = async (artistId) => {
  const deletedArtist = await Artist.destroy({
    where: {
      id: artistId,
    },
  });
  return deletedArtist;
};

module.exports = deleteArtistService;
