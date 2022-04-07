const createArtistController = require('./artists.controllers/createArtist.controller');
const deleteArtistController = require('./artists.controllers/deleteArtist.controller');
const editArtistController = require('./artists.controllers/editArtist.controller');
const getAllArtistsController = require('./artists.controllers/getAllArtists.controller');

const artistController = {
  create: createArtistController,
  delete: deleteArtistController,
  edit: editArtistController,
  getAll: getAllArtistsController,
};

module.exports = artistController;
