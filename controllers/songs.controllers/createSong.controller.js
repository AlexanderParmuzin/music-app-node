const songsService = require('../../services/songs.service');
const artistsService = require('../../services/artists.service');
const logger = require('../../logger');

const {
  CREATE_SONG_ARTIST_NOT_FOUND,
  CREATE_SONG_EXISTS,
  CREATE_SONG_FAIL,
} = require('../../consts/songs.const');

const createSongController = async (req, res) => {
  try {
    const { artistName, songName } = req.body;

    const foundArtist = await artistsService.getByName(artistName);

    if (!foundArtist) {
      res.status(400).json({ msg: CREATE_SONG_ARTIST_NOT_FOUND });
      logger.error(
        `400 || ${res.statusMessage} - ${req.originalUrl} - ${req.method} - ${req.ip}`
      );
      return;
    }

    const artistId = foundArtist.id;

    const foundSong = await songsService.getByName(artistName, songName);

    if (foundSong) {
      res.status(400).json({ msg: CREATE_SONG_EXISTS });
      logger.error(
        `400 || ${res.statusMessage} - ${req.originalUrl} - ${req.method} - ${req.ip}`
      );
      return;
    }

    const isSongCreated = await songsService.create(
      artistName,
      songName,
      artistId
    );

    if (!isSongCreated) {
      logger.error(
        `400 || ${res.statusMessage} - ${req.originalUrl} - ${req.method} - ${req.ip}`
      );
      throw new Error(CREATE_SONG_FAIL);
    }

    res.status(200).json({ msg: `Song ${songName} was added to database` });
    logger.info(
      `200 || ${res.statusMessage} - ${req.originalUrl} - ${req.method} - ${req.ip}`
    );
  } catch (error) {
    res.status(400).json({ msg: error.message });
    logger.error(
      `400 || ${res.statusMessage} - ${req.originalUrl} - ${req.method} - ${req.ip}`
    );
  }
};

module.exports = createSongController;
