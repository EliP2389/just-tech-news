const { Model, DataTypes } = require('sequelize');
const { User } = require('.');
const sequelize = require('../config/connection');

class Commment extends Model {}

Commment.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true

        },
        comment_text: {
               type: DataTypes.STRING,
               allowNull: false,
               validate: {
                   len: [8]
               }
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'user',
                key: 'id'
            }

        },
        post_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'post',
                key: 'id'
            }
        }

    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'comment'
    }
);

module.exports = Commment;