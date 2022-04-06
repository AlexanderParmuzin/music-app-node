const artistsService = require('../../services/artists.service');

const deleteArtistController = async (req, res) => {
  try {
    const artistId = req.params.artistId;

    const foundArtist = await artistsService.getById(+artistId);
    console.log('foundArtist', foundArtist);
    if (!foundArtist) {
      res.status(400).json({ msg: 'Artist is not created yet, can`t delete' });
      return;
    }

    const artistName = foundArtist.artistName;

    const deletedArtist = await artistsService.delete(artistId);
    console.log('deletedArtist', deletedArtist);
    if (!deletedArtist) {
      throw new Error();
    }

    res.status(200).json({
      msg: `Artist ${artistName} was deleted`,
    });
    return;
  } catch (error) {
    console.log(error);
    res.status(400).json({ msg: 'Unable to delete artist' });
  }
};

module.exports = deleteArtistController;
