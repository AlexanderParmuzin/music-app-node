const logger = require('../../logger');
const artistsService = require('../../services/artists.service');

const getAllArtistsController = async (req, res) => {
  try {
    const foundArtists = await artistsService.getAll();

    if (!foundArtists || !foundArtists.length) {
      res.status(400).json({ msg: 'No artists found. Add them.' });
      logger.error(`400 || ${res.statusMessage} - ${req.originalUrl} - ${req.method} - ${req.ip}`)
      return;
    }
    
    res.status(200).json(foundArtists);
    logger.info(`200 || ${res.statusMessage} - ${req.originalUrl} - ${req.method} - ${req.ip}`)
  } catch (error) {
    res.status(400).json({ msg: error });
    logger.error(`400 || ${res.statusMessage} - ${req.originalUrl} - ${req.method} - ${req.ip}`)
  }
};

module.exports = getAllArtistsController;
