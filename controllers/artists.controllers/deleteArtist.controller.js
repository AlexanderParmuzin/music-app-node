const logger = require('../../logger');
const artistsService = require('../../services/artists.service');

const deleteArtistController = async (req, res) => {
  try {
    const artistId = req.params.artistId;

    const foundArtist = await artistsService.getById(+artistId);
    console.log('foundArtist', foundArtist);
    if (!foundArtist) {
      res.status(400).json({ msg: 'Artist is not created yet, can`t delete' });
      logger.error(
        `400 || ${res.statusMessage} - ${req.originalUrl} - ${req.method} - ${req.ip}`
      );
      return;
    }

    const artistName = foundArtist.artistName;

    const deletedArtist = await artistsService.delete(artistId);
    console.log('deletedArtist', deletedArtist);
    if (!deletedArtist) {
      logger.error(
        `400 || ${res.statusMessage} - ${req.originalUrl} - ${req.method} - ${req.ip}`
      );
      throw new Error();
    }

    res.status(200).json({
      msg: `Artist ${artistName} was deleted`,
    });
    logger.info(
      `200 || ${res.statusMessage} - ${req.originalUrl} - ${req.method} - ${req.ip}`
    );
  } catch (error) {
    res.status(400).json({ msg: 'Unable to delete artist' });
    logger.error(
      `400 || ${res.statusMessage} - ${req.originalUrl} - ${req.method} - ${req.ip}`
    );
  }
};

module.exports = deleteArtistController;
