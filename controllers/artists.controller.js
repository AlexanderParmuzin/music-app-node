const createArtistController = require('./artists.controllers/createArtist.controller');
const deleteArtistController = require('./artists.controllers/deleteArtist.controller');
const editArtistController = require('./artists.controllers/editArtist.controller');
const getAllArtistsController = require('./artists.controllers/getAllArtists.controller');
const getOneArtistsController = require('./artists.controllers/getOneArtist.controller');

const artistController = {
  create: createArtistController,
  delete: deleteArtistController,
  edit: editArtistController,
  getAll: getAllArtistsController,
  getOne: getOneArtistsController,
};

module.exports = artistController;
