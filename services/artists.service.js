const createArtistService = require('./artists.services/createArtist.service');
const deleteArtistService = require('./artists.services/deleteArtist.service');
const editArtistService = require('./artists.services/editArtist.service');
const getAllArtistsService = require('./artists.services/getAllArtists.service');
const getOneArtistService = require('./artists.services/getOneArtist.service');

const artistService = {
  getAll: getAllArtistsService,
  getByName: createArtistService.findArtistByName,
  getById: editArtistService.findArtistById,
  create: createArtistService.createArtist,
  delete: deleteArtistService,
  edit: editArtistService.updateArtist,
  getOneArtist: getOneArtistService,
};

module.exports = artistService;
