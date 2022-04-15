const { GET_SONG_NOT_FOUND } = require('../../consts/songs.const');
const logger = require('../../logger');
const songsService = require('../../services/songs.service');

const getOneSongController = async (req, res) => {
  try {
    const { songName } = req.body;

    const foundSongs = await songsService.getOneSong(songName);

    if (!foundSongs || !foundSongs.length) {
      res.status(400).json({ msg: GET_SONG_NOT_FOUND });
      logger.error(
        `400 || ${res.statusMessage} - ${req.originalUrl} - ${req.method} - ${req.ip}`
      );
      return;
    }

    res.status(200).json(foundSongs);
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

module.exports = getOneSongController;
