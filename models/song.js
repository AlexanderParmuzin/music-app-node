const Sequelize = require('sequelize');

const sequelize = require('../db/db.config');

const Song = sequelize.define('songs', {
  artistName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  songName: {
    type: Sequelize.STRING,
  },
});

module.exports = Song;
