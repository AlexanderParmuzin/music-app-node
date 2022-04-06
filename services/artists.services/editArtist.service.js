const Artist = require('../../models/artist');

const findArtistById = async (originalArtistId) => {
  const foundArtist = await Artist.findOne({
    raw: true,
    where: {
      id: originalArtistId,
    },
  });
  return foundArtist;
};

const updateArtist = async (newArtistName, originalArtistId) => {
  const updatedArtist = await Artist.update(
    {
      artistName: newArtistName,
    },
    {
      where: {
        id: originalArtistId,
      },
    }
  );
  return updatedArtist;
};

const editArtistService = {
  findArtistById,
  updateArtist,
};

module.exports = editArtistService;
