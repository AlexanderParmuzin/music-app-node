const logger = require('../../logger');
const songsService = require('../../services/songs.service');

const {
  EDIT_SONG_NOT_FOUND,
  EDIT_SONG_SAME_NAME,
  EDIT_SONG_FAIL,
} = require('../../consts/songs.const');

const editSongController = async (req, res) => {
  try {
    const originalSongId = req.params.songId;
    const newSongName = req.body.songName;

    const foundSong = await songsService.getById(+originalSongId);

    if (!foundSong) {
      res.status(400).json({ msg: EDIT_SONG_NOT_FOUND });
      logger.error(
        `400 || ${res.statusMessage} - ${req.originalUrl} - ${req.method} - ${req.ip}`
      );
      return;
    }

    const previousName = foundSong.songName;

    if (previousName == newSongName) {
      res.status(400).json({ msg: EDIT_SONG_SAME_NAME });
      logger.error(
        `400 || ${res.statusMessage} - ${req.originalUrl} - ${req.method} - ${req.ip}`
      );
      return;
    }

    const updatedSong = await songsService.edit(newSongName, originalSongId);

    if (!updatedSong) {
      logger.error(
        `400 || ${res.statusMessage} - ${req.originalUrl} - ${req.method} - ${req.ip}`
      );
      throw new Error();
    }

    res.status(200).json({
      msg: 'Song`s' + ` name ${previousName} was changed into ${newSongName}`,
    });
    logger.info(
      `200 || ${res.statusMessage} - ${req.originalUrl} - ${req.method} - ${req.ip}`
    );
  } catch (error) {
    res.status(400).json({ msg: EDIT_SONG_FAIL });
    logger.error(
      `400 || ${res.statusMessage} - ${req.originalUrl} - ${req.method} - ${req.ip}`
    );
  }
};

module.exports = editSongController;
