const router = require('express').Router();
const {Recipes, Ingredients, RecipeIngredient } = require('../../models');
const  Units  =require('../../models/units');

//user's dashboard page
router.get('/dashboard', async (req, res) => {
  try {
    const dbRecipeData = await Recipes.findAll({ 
              
      include: [{
          model: RecipeIngredient,
      },
      {
          model: Ingredients,
      include:[{
          model: Units
      }]
  }],
             
  });
    const recipes = dbRecipeData.map((recipe) =>
      recipe.get({ plain: true })
    );
    res.render('dashboard', {
      recipes,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});



//get single recipe data by id
router.get('/:id', async (req, res) => {
  try {
    const dbRecipeData = await Recipes.findByPk(req.params.id);
    const recipe = dbRecipeData.get({ plain: true });
    res.render('recipe', { recipe, logged_in: req.session.logged_in });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


//get all recipes data
router.get('/', async (req, res) => {
  try {
    const dbRecipeData = await Recipes.findAll({ 
              
              include: [{
                  model: RecipeIngredient,
              },
              {
                  model: Ingredients,
              include:[{
                  model: Units
              }]
          }],
                     
          });

    const recipes = dbRecipeData.map((recipe) =>
      recipe.get({ plain: true })
    );

    res.render('home', {
      recipes,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});




module.exports = router;