const songsService = require('../../services/songs.service');

const getAllSongsController = async (req, res) => {
  try {
    const foundSongs = await songsService.getAll();
    if (!foundSongs) {
      res.status(400).json({ msg: 'Songs are yet to come' });
    }
    res.status(200).json(foundSongs);
  } catch (error) {
    res.status(400).json({ msg: error });
  }
};

module.exports = getAllSongsController;
