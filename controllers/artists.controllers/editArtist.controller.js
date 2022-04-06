const artistsService = require('../../services/artists.service');

const editArtistController = async (req, res) => {
  try {
    const originalArtistId = req.params.artistId;
    const newArtistName = req.body.artistName;

    const foundArtist = await artistsService.getById(+originalArtistId);

    if (!foundArtist) {
      res.status(400).json({ msg: 'Artist is not created yet, can`t edit' });
      return;
    }

    const previousName = foundArtist.artistName;

    if (previousName == newArtistName) {
      res.status(400).json({ msg: 'Artist has this name already' });
      return;
    }

    const updatedArtist = await artistsService.edit(
      newArtistName,
      originalArtistId
    );

    if (!updatedArtist) {
      throw new Error();
    }

    res.status(200).json({
      msg:
        'Artist`s' + ` name ${previousName} was changed into ${newArtistName}`,
    });
    return;
  } catch (error) {
    res.status(400).json({ msg: 'Unable to edit artist' });
  }
};

module.exports = editArtistController;
