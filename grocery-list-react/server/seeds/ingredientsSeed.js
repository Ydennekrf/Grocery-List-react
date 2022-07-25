const { Ingredients } =require('../models');

const ingredientSeed = [{
    title: "onion",
    unit_id: 5
},{
    title: "garlic",
    unit_id: 5
},{
    title: "mushrooms",
    unit_id: 5
},{
    title: "aborio rice",
    unit_id: 1
},{
    title: "white wine",
    unit_id: 4
},{
    title: "chicken stock",
    unit_id: 4
},{
    title: "parmesean cheese(fine grate)",
    unit_id: 1
},{
    title: "butter",
    unit_id: 1
},{
    title: "salt",
    unit_id: 1
},{
    title: "pepper",
    unit_id: 1
},{
    title: "thyme",
    unit_id: 6
},{
    title: "10oz. ribeye",
    unit_id: 5
},{
    title: "yukon gold potato",
    unit_id: 1
},{
    title: "asperagus",
    unit_id: 6
},{
    title: "red wine",
    unit_id: 4
},{
    title: "flour",
    unit_id: 1
},{
    title: "beef stock",
    unit_id: 3
},{
    title: "pasta sheets",
    unit_id: 5
},{
    title: "ricotta cheese",
    unit_id: 1
},{
    title: "spinach",
    unit_id: 6
},{
    title: "provolone cheese",
    unit_id: 1
},{
    title: "course ground white veal",
    unit_id: 2
},{
    title: "tomato sauce",
    unit_id: 3
},{
    title: "buffala mozzerella",
    unit_id: 1
},{
    title: "basil",
    unit_id: 6
},{
    title: "sour dough bread",
    unit_id: 5
},{
    title: "eggs",
    unit_id: 5
},{
    title: "pickled pugelise chili peppers",
    unit_id: 1
},{
    title: "parsley",
    unit_id: 6
},{
    title: "arugula",
    unit_id: 1
},{
    title: "35% cream",
    unit_id: 4
},{
    title: "T3 fresh octopus",
    unit_id: 5
},{
    title: "lemons",
    unit_id: 5
},{
    title: "yellow peppers",
    unit_id: 5
},{
    title: "N'Duja sausage",
    unit_id: 1
},{
    title: "heirloom beets",
    unit_id: 1
},{
    title: "balsamic vinegar",
    unit_id: 4
},{
    title: "olive oil",
    unit_id: 4
}]

const ingredientsSeeding = () => Ingredients.bulkCreate(ingredientSeed);

module.exports = ingredientsSeeding;