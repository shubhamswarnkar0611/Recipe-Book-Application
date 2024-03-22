export class RecipeService {
   
  async getAllRecipe() {
    try {
      const response = await fetch(
        "https://api.spoonacular.com/recipes/findByNutrients?minCarbs=10&maxCarbs=50&number=20&apiKey=5c3493b3ad8949a2ab4bed39cc61ab79"
      );
      return response;
    } catch (e) {
      console.log("Error: " + e);
    }
  }
  async getRecipeDetails(id) {
    try {
      const response = await fetch(
        `  https://api.spoonacular.com/recipes/${id}/information?includeNutrition=false&apiKey=5c3493b3ad8949a2ab4bed39cc61ab79`
      );
      return response;
    } catch (e) {
      console.log("Error: " + e);
    }
  }
  async searchRecipe(title) {
    try {
      const response = await fetch(
        ` https://api.spoonacular.com/recipes/complexSearch?query=${title}&maxFat=25&number=20&apiKey=5c3493b3ad8949a2ab4bed39cc61ab79`
      );
      return response;
    } catch (e) {
      console.log("Error: " + e);
    }
  }
  
}

const recipeService = new RecipeService();
export default recipeService;
