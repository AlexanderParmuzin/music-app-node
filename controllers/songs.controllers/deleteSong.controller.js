const songsService = require('../../services/songs.service');

const deleteSongController = async (req, res) => {
  try {
    const songId = req.params.songId;

    const foundSong = await songsService.getById(+songId);
    
    if (!foundSong) {
      res.status(400).json({ msg: 'Song is not created yet, can`t delete' });
      return;
    }

    const songName = foundSong.songName;

    const deletedSong = await songsService.delete(songId);
    
    if (!deletedSong) {
      throw new Error();
    }

    res.status(200).json({
      msg: `Song ${songName} was deleted`,
    });
    return;
  } catch (error) {
    console.log(error);
    res.status(400).json({ msg: 'Unable to delete song' });
  }
};

module.exports = deleteSongController;
