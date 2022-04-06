const createArtistService = require('./artists.services/createArtist.service');
const deleteArtistService = require('./artists.services/deleteArtist.service');
const editArtistService = require('./artists.services/editArtist.service');
const getArtistService = require('./artists.services/getAllArtists.service');

const artistService = {
  getAll: getArtistService,
  getByName: createArtistService.findArtistByName,
  getById: editArtistService.findArtistById,
  create: createArtistService.createArtist,
  delete: deleteArtistService,
  edit: editArtistService.updateArtist,
};

module.exports = artistService;
