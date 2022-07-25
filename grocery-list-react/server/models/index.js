const Users = require('./users');
const Recipes = require('./recipes');
const Ingredients = require('./ingredients');
const Units = require('./units');
const RecipeIngredient = require('./recipeIngredient');


Recipes.belongsToMany(Ingredients, {
    through: RecipeIngredient,
    foreignKey: 'recipe_id',
});
Recipes.hasMany(RecipeIngredient, {
    foreignKey: 'recipe_id'
})
RecipeIngredient.belongsTo(Recipes, {
    foreignKey: 'recipe_id',
});
Ingredients.belongsToMany(Recipes, {
    through: RecipeIngredient,
    foreignKey: 'ingredient_id'
})

Ingredients.belongsTo(Units, {
    foreignKey: 'unit_id'
});
Units.hasOne(Ingredients, {
    foreignKey: 'unit_id'
});


module.exports = {Users, Recipes, Ingredients, RecipeIngredient};