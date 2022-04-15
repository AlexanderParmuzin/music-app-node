const logger = require('../../logger');
const songsService = require('../../services/songs.service');

const {
  DELETE_SONG_NOT_FOUND,
  DELETE_SONG_FAIL,
} = require('../../consts/songs.const');

const deleteSongController = async (req, res) => {
  try {
    const songId = req.params.songId;

    const foundSong = await songsService.getById(+songId);

    if (!foundSong) {
      res.status(400).json({ msg: DELETE_SONG_NOT_FOUND });
      logger.error(
        `400 || ${res.statusMessage} - ${req.originalUrl} - ${req.method} - ${req.ip}`
      );
      return;
    }

    const songName = foundSong.songName;

    const deletedSong = await songsService.delete(songId);

    if (!deletedSong) {
      logger.error(
        `400 || ${res.statusMessage} - ${req.originalUrl} - ${req.method} - ${req.ip}`
      );
      throw new Error();
    }

    res.status(200).json({
      msg: `Song ${songName} was deleted`,
    });
    logger.info(
      `200 || ${res.statusMessage} - ${req.originalUrl} - ${req.method} - ${req.ip}`
    );
  } catch (error) {
    res.status(400).json({ msg: DELETE_SONG_FAIL });
    logger.error(
      `400 || ${res.statusMessage} - ${req.originalUrl} - ${req.method} - ${req.ip}`
    );
  }
};

module.exports = deleteSongController;
