const { GET_ARTIST_NOT_FOUND } = require('../../consts/artists.const');
const logger = require('../../logger');
const artistService = require('../../services/artists.service');

const getOneArtistController = async (req, res) => {
  try {
    const { artistName } = req.body;

    const foundArtist = await artistService.getOneArtist(artistName);

    if (!foundArtist || !foundArtist.length) {
      res.status(400).json({ msg: GET_ARTIST_NOT_FOUND });
      logger.error(
        `400 || ${res.statusMessage} - ${req.originalUrl} - ${req.method} - ${req.ip}`
      );
      return;
    }

    res.status(200).json(foundArtist);
    logger.info(
      `200 || ${res.statusMessage} - ${req.originalUrl} - ${req.method} - ${req.ip}`
    );
  } catch (error) {
    res.status(400).json({ msg: error });
    logger.error(
      `400 || ${res.statusMessage} - ${req.originalUrl} - ${req.method} - ${req.ip}`
    );
  }
};

module.exports = getOneArtistController;
