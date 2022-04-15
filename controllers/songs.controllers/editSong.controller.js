const logger = require('../../logger');
const songsService = require('../../services/songs.service');

const editSongController = async (req, res) => {
  try {
    const originalSongId = req.params.songId;
    const newSongName = req.body.songName;

    const foundSong = await songsService.getById(+originalSongId);

    if (!foundSong) {
      res.status(400).json({ msg: 'Artist is not created yet, can`t edit' });
      logger.error(`400 || ${res.statusMessage} - ${req.originalUrl} - ${req.method} - ${req.ip}`)
      return;
    }

    const previousName = foundSong.songName;

    if (previousName == newSongName) {
      res.status(400).json({ msg: 'Song is already called that way' });
      logger.error(`400 || ${res.statusMessage} - ${req.originalUrl} - ${req.method} - ${req.ip}`)
      return;
    }

    const updatedSong = await songsService.edit(newSongName, originalSongId);

    if (!updatedSong) {
      logger.error(`400 || ${res.statusMessage} - ${req.originalUrl} - ${req.method} - ${req.ip}`)
      throw new Error();
    }

    res.status(200).json({
      msg:
        'Song`s' + ` name ${previousName} was changed into ${newSongName}`,
    });
    logger.info(`200 || ${res.statusMessage} - ${req.originalUrl} - ${req.method} - ${req.ip}`)
  } catch (error) {
    res.status(400).json({ msg: 'Unable to edit song' });
    logger.error(`400 || ${res.statusMessage} - ${req.originalUrl} - ${req.method} - ${req.ip}`)
  }
};

module.exports = editSongController;
