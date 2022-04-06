const Artist = require('../../models/artist')

const getAllArtistsService = async (artistName) => {
    const artists = await Artist.findAll({
        attributes: ['id', 'artistName', 'songsCount'],
    });
    return artists;
};

module.exports = getAllArtistsService;