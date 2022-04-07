const songsService = require('../../services/songs.service');

const editSongController = async (req, res) => {
  try {
    const originalSongId = req.params.songId;
    const newSongName = req.body.songName;

    const foundSong = await songsService.getById(+originalSongId);

    if (!foundSong) {
      res.status(400).json({ msg: 'Artist is not created yet, can`t edit' });
      return;
    }

    const previousName = foundSong.songName;

    if (previousName == newSongName) {
      res.status(400).json({ msg: 'Song is already called that way' });
      return;
    }

    const updatedSong = await songsService.edit(newSongName, originalSongId);

    if (!updatedSong) {
      throw new Error();
    }

    res.status(200).json({
      msg:
        'Song`s' + ` name ${previousName} was changed into ${newSongName}`,
    });
    return;
  } catch (error) {
    console.log(error);
    res.status(400).json({ msg: 'Unable to edit song' });
  }
};

module.exports = editSongController;
