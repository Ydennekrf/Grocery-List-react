const router = require('express').Router();
const userRoutes = require('./usersRoutes');
const recipeRoutes = require('./recipesRoutes');
const groceryRoutes = require('./groceryRoutes');

router.use('/recipes', recipeRoutes);
router.use('/grocery', groceryRoutes);
router.use('/users', userRoutes);

module.exports = router;