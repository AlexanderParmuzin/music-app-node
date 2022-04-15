const { Artist, Song } = require('../../models');

const getAllArtistsService = async () => {
    const artists = await Artist.findAll({
        attributes: ['id', 'artistName'],
        include: 'songs'
    });
    return artists;
};

module.exports = getAllArtistsService;