const songsService = require('../../services/songs.service');
const artistsService = require('../../services/artists.service');

const createSongController = async (req, res) => {
  try {
    const artistName = req.body.artistName;
    const songName = req.body.songName;

    const foundArtist = await artistsService.getByName(artistName);

    if (!foundArtist) {
      res
        .status(400)
        .json({ msg: 'Artist is not created yet. Please create artist first' });
      return;
    }

    const foundSong = await songsService.getByName(artistName, songName);

    if (foundSong) {
      res
        .status(400)
        .json({ msg: 'The song of this artist with such name already exists' });
      return;
    }

    const isSongCreated = await songsService.create(artistName, songName);

    if (!isSongCreated) {
      throw new Error('Song creation failed');
    }

    res.status(200).json({ msg: `Song ${songName} was added to database` });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

module.exports = createSongController;
