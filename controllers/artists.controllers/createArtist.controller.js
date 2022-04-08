const artistsService = require('../../services/artists.service');

const createArtistController = async (req, res) => {
  try {
    const artistName = req.body.artistName;

    const regex1 = /м[o, a, о, а ]нет[o, a, о, а]чка/gi;
    const regex2 = /m[o, a, о, а]net[o, a, о, а]chka/gi;

    const found1 = artistName.match(regex1);
    const found2 = artistName.match(regex2);

    if (found1 || found2) {
      res
        .status(400)
        .json({ msg: 'Sorry, cant add that. Only good music accepted.' });
      return;
    }

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
