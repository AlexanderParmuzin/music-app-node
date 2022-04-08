const artistsService = require('../../services/artists.service');

const createArtistController = async (req, res) => {
  try {
    const artistName = req.body.artistName;

    const foundArtist = await artistsService.getByName(artistName);

    if (foundArtist) {
      res.status(400).json({ msg: 'Artist with such name already exists' });
      return;
    }

    const isArtistCreated = await artistsService.create(artistName);

    if (!isArtistCreated) {
      throw new Error('Artist creation failed');
    }

    res.status(200).json({ msg: `Artist ${artistName} was added to database` });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

module.exports = createArtistController;
