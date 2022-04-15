'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Artist extends Model {
    static associate({ Song }) {
      // define association here
      this.hasMany(Song, { foreignKey: 'artistId', as: 'songs' });
    }
  }
  Artist.init(
    {
      artistName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: 'Artist name must be entered' },
          notEmpty: { msg: 'Artist name must not be empty' },
        },
      },
    },
    {
      sequelize,
      tableName: 'artists',
      modelName: 'Artist',
    }
  );
  return Artist;
};
