const Sequelize = require('sequelize');

const sequelize = require('../db/db.config');

const Artist = sequelize.define('artists', {
  artistName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  songsCount: {
    type: Sequelize.INTEGER,
    defaultValue: '0',
  },
});

module.exports = Artist;
