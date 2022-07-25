const{ Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class RecipeIngredient extends Model {}
    RecipeIngredient.init({
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        recipe_id: {
            type: DataTypes.INTEGER,
            references: {
                model: "recipes",
                key: "id"
            }
        },
        ingredient_id: {
            type: DataTypes.INTEGER,
            references: {
                model: "ingredients",
                key: "id"
            }
        },
        amount: {
            type: DataTypes.DECIMAL(10,2),
            allowNull: false
        }
        },
        {
            sequelize,
            freezeTableName: true,
            underscored: true,
            modelName: 'recipeIngredient'
        });

        module.exports = RecipeIngredient