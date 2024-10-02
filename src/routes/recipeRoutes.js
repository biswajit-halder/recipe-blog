const express = require("express");
const recipeRouter = express.Router();
const recipeController = require("../controllers/recipeController");

/**
 * App Routes
*/
recipeRouter.get('/', recipeController.homepage);
recipeRouter.get('/recipe/:id', recipeController.exploreRecipe);
recipeRouter.get('/categories', recipeController.exploreCategories);
recipeRouter.get('/categories/:id', recipeController.exploreCategoriesById);
recipeRouter.post('/search', recipeController.searchRecipe);
recipeRouter.get('/explore-latest', recipeController.exploreLatest);
recipeRouter.get('/explore-random', recipeController.exploreRandom);
recipeRouter.get('/submit-recipe', recipeController.submitRecipe);
recipeRouter.post('/submit-recipe', recipeController.submitRecipeOnPost);

module.exports = recipeRouter;