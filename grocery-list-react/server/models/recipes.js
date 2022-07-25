const { Model , DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Recipes extends Model {}

Recipes.init({
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
            isAlphanumeric: true
        }
    },
    instructions: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    servings: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    
},
{
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'recipes'
});

module.exports = Recipes