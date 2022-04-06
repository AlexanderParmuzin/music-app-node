const createArtistController = require('./artists.controllers/createArtist.controller');
const deleteArtistController = require('./artists.controllers/deleteArtist.controller');
const editArtistController = require('./artists.controllers/editArtist.controller');
const getArtistsController = require('./artists.controllers/getArtists.controller');

const songController = {
  create: createArtistController,
  delete: deleteArtistController,
  edit: editArtistController,
  getAll: getArtistsController,
};

module.exports = songController;
