'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Song extends Model {
    static associate({ Artist }) {
      // define association here
      this.belongsTo(Artist, { foreignKey: 'artistId', as: 'artist' });
    }
  }
  Song.init(
    {
      artistName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: 'Artist name must be entered' },
          notEmpty: { msg: 'Artist name must not be empty' },
        },
      },
      songName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: 'Song name must be entered' },
          notEmpty: { msg: 'Song name must not be empty' },
        },
      },
    },
    {
      sequelize,
      tableName: 'songs',
      modelName: 'Song',
    }
  );
  return Song;
};
