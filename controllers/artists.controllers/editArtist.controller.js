const logger = require('../../logger');
const artistsService = require('../../services/artists.service');

const editArtistController = async (req, res) => {
  try {
    const originalArtistId = req.params.artistId;
    const newArtistName = req.body.artistName;

    const foundArtist = await artistsService.getById(+originalArtistId);

    if (!foundArtist) {
      res.status(400).json({ msg: 'Artist is not created yet, can`t edit' });
      logger.error(
        `400 || ${res.statusMessage} - ${req.originalUrl} - ${req.method} - ${req.ip}`
      );
      return;
    }

    const previousName = foundArtist.artistName;

    if (previousName == newArtistName) {
      res.status(400).json({ msg: 'Artist has this name already' });
      logger.error(
        `400 || ${res.statusMessage} - ${req.originalUrl} - ${req.method} - ${req.ip}`
      );
      return;
    }

    const updatedArtist = await artistsService.edit(
      newArtistName,
      originalArtistId
    );

    if (!updatedArtist) {
      logger.error(
        `400 || ${res.statusMessage} - ${req.originalUrl} - ${req.method} - ${req.ip}`
      );
      throw new Error();
    }

    res.status(200).json({
      msg:
        'Artist`s' + ` name ${previousName} was changed into ${newArtistName}`,
    });
    logger.info(
      `200 || ${res.statusMessage} - ${req.originalUrl} - ${req.method} - ${req.ip}`
    );
  } catch (error) {
    res.status(400).json({ msg: 'Unable to edit artist' });
    logger.error(`400 || ${res.statusMessage} - ${req.originalUrl} - ${req.method} - ${req.ip}`)
  }
};

module.exports = editArtistController;
