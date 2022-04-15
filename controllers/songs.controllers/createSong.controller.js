const songsService = require('../../services/songs.service');
const artistsService = require('../../services/artists.service');
const logger = require('../../logger');

const createSongController = async (req, res) => {
  try {
    const { artistName, songName } = req.body;

    const foundArtist = await artistsService.getByName(artistName);

    if (!foundArtist) {
      res
        .status(400)
        .json({ msg: 'Artist is not created yet. Please create artist first' });
        logger.error(`400 || ${res.statusMessage} - ${req.originalUrl} - ${req.method} - ${req.ip}`)
      return;
    }

    const artistId = foundArtist.id;

    const foundSong = await songsService.getByName(artistName, songName);

    if (foundSong) {
      res
        .status(400)
        .json({ msg: 'The song of this artist with such name already exists' });
        logger.error(`400 || ${res.statusMessage} - ${req.originalUrl} - ${req.method} - ${req.ip}`)
      return;
    }

    const isSongCreated = await songsService.create(artistName, songName, artistId);

    if (!isSongCreated) {
      logger.error(`400 || ${res.statusMessage} - ${req.originalUrl} - ${req.method} - ${req.ip}`)
      throw new Error('Song creation failed');
    }

    res.status(200).json({ msg: `Song ${songName} was added to database` });
    logger.info(`200 || ${res.statusMessage} - ${req.originalUrl} - ${req.method} - ${req.ip}`)
  } catch (error) {
    res.status(400).json({ msg: error.message });
    logger.error(`400 || ${res.statusMessage} - ${req.originalUrl} - ${req.method} - ${req.ip}`)
  }
};

module.exports = createSongController;
