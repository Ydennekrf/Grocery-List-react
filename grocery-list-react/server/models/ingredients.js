const{ Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Ingredients extends Model {}
    Ingredients.init({
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [2, 15]
            }
        },
        unit_id: {
            type: DataTypes.INTEGER,
            references: {
                model: "units",
                key: "id"
            }
        }
        },
        {
            sequelize,
            freezeTableName: true,
            underscored: true,
            modelName: 'ingredients'
        });

        module.exports = Ingredients
