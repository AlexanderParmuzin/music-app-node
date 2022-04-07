const artistsService = require('../../services/artists.service');

const getAllArtistsController = async (req, res) => {
  try {
    const foundArtists = await artistsService.getAll();
    if (!foundArtists) {
      res.status(400).json({ msg: 'Artists are yet to come' });
    }
    res.status(200).json(foundArtists);
  } catch (error) {
    res.status(400).json({ msg: error });
  }
};

module.exports = getAllArtistsController;
