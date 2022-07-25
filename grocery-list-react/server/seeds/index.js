const sequelize = require('../config/connection');
const ingredientsSeeding = require('./ingredientsSeed');
const recipeIngredientSeeding = require('./recipeIngredients');
const recipeSeeding = require('./recipeSeed');
const unitsSeeding = require('./units');
const usersSeeding = require('./usersSeed');

const seeds = async () => {
    await sequelize.sync({ force:true });
    console.log('database synced');
    await usersSeeding();
    console.log('users seeded')
    await recipeSeeding();
    console.log('recipes seeded');
    await unitsSeeding();
    console.log('units seeded');
    await ingredientsSeeding();
    console.log('ingredients seeded');
    await recipeIngredientSeeding();
    console.log('recipeIngredients seeded');

    process.exit();
};

seeds();