const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model {}

Comment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull:false,
      primaryKey:true,
      autoIncrement: true,
    },
    body: {
      type: DataTypes.STRING,
      allowNull: false
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull:false,
      defaultValue: DataTypes.NOW,
    },
    userID: {
      type: DataTypes.INTEGER,
      references:{
        model: 'user',
        key: 'id',
      },
      commentID: {
        type: DataTypes.INTEGER,
        references: {
          model: 'blog',
          key: 'id'
        }
      }
    }
  },
  {
    sequelize
  }
);

module.exports = Comment;