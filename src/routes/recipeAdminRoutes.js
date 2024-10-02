const express = require("express");
const recipeAdminRouter = express.Router();
//const recipeAdminController = require("../controllers/recipeAdminController");

/**
 * App Routes
*/
/* recipeAdminRouter.get('/', recipeAdminController.homepage);
recipeAdminRouter.get('/recipe/:id', recipeAdminController.exploreRecipe);
recipeAdminRouter.get('/categories', recipeAdminController.exploreCategories);
recipeAdminRouter.get('/categories/:id', recipeAdminController.exploreCategoriesById);
recipeAdminRouter.post('/search', recipeAdminController.searchRecipe);
recipeAdminRouter.get('/explore-latest', recipeAdminController.exploreLatest);
recipeAdminRouter.get('/explore-random', recipeAdminController.exploreRandom);
recipeAdminRouter.get('/submit-recipe', recipeAdminController.submitRecipe);
recipeAdminRouter.post('/submit-recipe', recipeAdminController.submitRecipeOnPost); */

module.exports = recipeAdminRouter;