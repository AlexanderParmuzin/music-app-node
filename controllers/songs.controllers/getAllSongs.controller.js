const artistService = require('../../services/artists.service');

const getArtistsController = async (req, res) => {
  try {
    const foundArtists = await artistService.getAll();
    res.status(200).json(foundArtists);
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

module.exports = getArtistsController;
