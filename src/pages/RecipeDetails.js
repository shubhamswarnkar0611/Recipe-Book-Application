import React from "react";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import recipeService from "../services/RecipeApi";
import { useParams } from "react-router-dom";

const RecipeDetails = () => {
  const [recipe, setRecipe] = useState();
  const { id } = useParams();
  useEffect(() => {
    getRecipe();
  }, []);
  console.log(recipe);
  async function getRecipe() {
    try {
        const response = await recipeService.getRecipeDetails(id);
        setRecipe(await response.json());
    //   setRecipe({
    //     vegetarian: true,
    //     vegan: false,
    //     glutenFree: false,
    //     dairyFree: false,
    //     veryHealthy: false,
    //     cheap: false,
    //     veryPopular: false,
    //     sustainable: false,
    //     lowFodmap: false,
    //     weightWatcherSmartPoints: 5,
    //     gaps: "no",
    //     preparationMinutes: -1,
    //     cookingMinutes: -1,
    //     aggregateLikes: 0,
    //     healthScore: 3,
    //     creditsText: "spoonacular",
    //     license: "spoonacular's terms",
    //     sourceName: "spoonacular",
    //     pricePerServing: 35.38,
    //     extendedIngredients: [
    //       {
    //         id: 18372,
    //         aisle: "Baking",
    //         image: "white-powder.jpg",
    //         consistency: "SOLID",
    //         name: "baking soda",
    //         nameClean: "baking soda",
    //         original: "1.5 teaspoons baking soda",
    //         originalName: "baking soda",
    //         amount: 1.5,
    //         unit: "teaspoons",
    //         meta: [],
    //         measures: {
    //           us: {
    //             amount: 1.5,
    //             unitShort: "tsps",
    //             unitLong: "teaspoons",
    //           },
    //           metric: {
    //             amount: 1.5,
    //             unitShort: "tsps",
    //             unitLong: "teaspoons",
    //           },
    //         },
    //       },
    //       {
    //         id: 9040,
    //         aisle: "Produce",
    //         image: "bananas.jpg",
    //         consistency: "SOLID",
    //         name: "bananas",
    //         nameClean: "banana",
    //         original: "3 ripe bananas, mashed",
    //         originalName: "ripe bananas, mashed",
    //         amount: 3.0,
    //         unit: "",
    //         meta: ["ripe", "mashed"],
    //         measures: {
    //           us: {
    //             amount: 3.0,
    //             unitShort: "",
    //             unitLong: "",
    //           },
    //           metric: {
    //             amount: 3.0,
    //             unitShort: "",
    //             unitLong: "",
    //           },
    //         },
    //       },
    //       {
    //         id: 1001,
    //         aisle: "Milk, Eggs, Other Dairy",
    //         image: "butter-sliced.jpg",
    //         consistency: "SOLID",
    //         name: "butter",
    //         nameClean: "butter",
    //         original: "90 grams melted butter",
    //         originalName: "melted butter",
    //         amount: 90.0,
    //         unit: "grams",
    //         meta: ["melted"],
    //         measures: {
    //           us: {
    //             amount: 3.175,
    //             unitShort: "oz",
    //             unitLong: "ounces",
    //           },
    //           metric: {
    //             amount: 90.0,
    //             unitShort: "g",
    //             unitLong: "grams",
    //           },
    //         },
    //       },
    //       {
    //         id: 1123,
    //         aisle: "Milk, Eggs, Other Dairy",
    //         image: "egg.png",
    //         consistency: "SOLID",
    //         name: "eggs",
    //         nameClean: "egg",
    //         original: "3 eggs",
    //         originalName: "eggs",
    //         amount: 3.0,
    //         unit: "",
    //         meta: [],
    //         measures: {
    //           us: {
    //             amount: 3.0,
    //             unitShort: "",
    //             unitLong: "",
    //           },
    //           metric: {
    //             amount: 3.0,
    //             unitShort: "",
    //             unitLong: "",
    //           },
    //         },
    //       },
    //       {
    //         id: 1077,
    //         aisle: "Milk, Eggs, Other Dairy",
    //         image: "milk.png",
    //         consistency: "LIQUID",
    //         name: "milk",
    //         nameClean: "milk",
    //         original: "120 ml milk",
    //         originalName: "milk",
    //         amount: 120.0,
    //         unit: "ml",
    //         meta: [],
    //         measures: {
    //           us: {
    //             amount: 4.185,
    //             unitShort: "fl. oz",
    //             unitLong: "fl. ozs",
    //           },
    //           metric: {
    //             amount: 120.0,
    //             unitShort: "ml",
    //             unitLong: "milliliters",
    //           },
    //         },
    //       },
    //       {
    //         id: 9084,
    //         aisle: "Produce",
    //         image: "currants.jpg",
    //         consistency: "SOLID",
    //         name: "currants",
    //         nameClean: "red currants",
    //         original: "150 grams red currants",
    //         originalName: "red currants",
    //         amount: 150.0,
    //         unit: "grams",
    //         meta: ["red"],
    //         measures: {
    //           us: {
    //             amount: 5.291,
    //             unitShort: "oz",
    //             unitLong: "ounces",
    //           },
    //           metric: {
    //             amount: 150.0,
    //             unitShort: "g",
    //             unitLong: "grams",
    //           },
    //         },
    //       },
    //       {
    //         id: 2047,
    //         aisle: "Spices and Seasonings",
    //         image: "salt.jpg",
    //         consistency: "SOLID",
    //         name: "salt",
    //         nameClean: "table salt",
    //         original: "1/2 teaspoon salt",
    //         originalName: "salt",
    //         amount: 0.5,
    //         unit: "teaspoon",
    //         meta: [],
    //         measures: {
    //           us: {
    //             amount: 0.5,
    //             unitShort: "tsps",
    //             unitLong: "teaspoons",
    //           },
    //           metric: {
    //             amount: 0.5,
    //             unitShort: "tsps",
    //             unitLong: "teaspoons",
    //           },
    //         },
    //       },
    //       {
    //         id: 9040,
    //         aisle: "Produce",
    //         image: "bananas.jpg",
    //         consistency: "SOLID",
    //         name: "stevia",
    //         nameClean: "banana",
    //         original:
    //           "2 teaspoons Stevia (use more if your bananas are not very ripe or if you want a sweeter bread)",
    //         originalName:
    //           "Stevia (use more if your bananas are not very ripe or if you want a sweeter bread)",
    //         amount: 2.0,
    //         unit: "teaspoons",
    //         meta: [
    //           "very ripe",
    //           "(use more if your bananas are not or if you want a sweeter bread)",
    //         ],
    //         measures: {
    //           us: {
    //             amount: 2.0,
    //             unitShort: "tsps",
    //             unitLong: "teaspoons",
    //           },
    //           metric: {
    //             amount: 2.0,
    //             unitShort: "tsps",
    //             unitLong: "teaspoons",
    //           },
    //         },
    //       },
    //       {
    //         id: 20080,
    //         aisle: "Baking",
    //         image: "flour.png",
    //         consistency: "SOLID",
    //         name: "flour",
    //         nameClean: "whole wheat flour",
    //         original: "270 grams whole wheat flour",
    //         originalName: "whole wheat flour",
    //         amount: 270.0,
    //         unit: "grams",
    //         meta: ["whole wheat"],
    //         measures: {
    //           us: {
    //             amount: 9.524,
    //             unitShort: "oz",
    //             unitLong: "ounces",
    //           },
    //           metric: {
    //             amount: 270.0,
    //             unitShort: "g",
    //             unitLong: "grams",
    //           },
    //         },
    //       },
    //     ],
    //     id: 149241,
    //     title: "Stevia-Sweetened Currant Banana Bread",
    //     author: "spoonacular",
    //     readyInMinutes: 80,
    //     servings: 12,
    //     sourceUrl: "http://spoonacular.com/1374327269712",
    //     image: "https://spoonacular.com/recipeImages/149241-556x370.jpg",
    //     imageType: "jpg",
    //     taste: {
    //       sweetness: 92.6,
    //       saltiness: 34.82,
    //       sourness: 66.37,
    //       bitterness: 25.42,
    //       savoriness: 33.64,
    //       fattiness: 100.0,
    //       spiciness: 0.0,
    //     },
    //     summary:
    //       'You can never have too many breakfast recipes, so give Stevia-Sweetened Currant Banana Bread a try. One serving contains <b>186 calories</b>, <b>5g of protein</b>, and <b>8g of fat</b>. This recipe serves 12. For <b>35 cents per serving</b>, this recipe <b>covers 9%</b> of your daily requirements of vitamins and minerals. This recipe from spoonacular user <a href="/profile/spoonacular">spoonacular</a> requires flour, bananas, salt, and eggs. From preparation to the plate, this recipe takes around <b>1 hour and 20 minutes</b>. It is a good option if you\'re following a <b>lacto ovo vegetarian</b> diet. Users who liked this recipe also liked <a href="https://spoonacular.com/recipes/stevia-sweetened-chocolate-chip-cream-cheese-banana-bread-556897">Stevia Sweetened Chocolate Chip Cream Cheese Banana Bread</a>, <a href="https://spoonacular.com/recipes/stevia-whole-wheat-banana-bread-125487">Stevia Whole Wheat Banana Bread</a>, and <a href="https://spoonacular.com/recipes/stevia-sweetened-strawberry-lemonade-1345483">Stevia Sweetened Strawberry Lemonade</a>.',
    //     cuisines: [],
    //     dishTypes: ["morning meal", "brunch", "breakfast"],
    //     diets: ["lacto ovo vegetarian"],
    //     occasions: [],
    //     winePairing: {
    //       pairedWines: ["port"],
    //       pairingText:
    //         "Port are my top picks for Quickbread. A common wine pairing rule is to make sure your wine is sweeter than your food. Delicate desserts go well with Moscato d'Asti, nutty desserts with cream sherry, and caramel or chocolate desserts pair well with port. The Krohn Lágrima Fine Port with a 5 out of 5 star rating seems like a good match. It costs about 20 dollars per bottle.",
    //       productMatches: [
    //         {
    //           id: 430325,
    //           title: "Krohn Lágrima Fine Port",
    //           description:
    //             "Toffee, caramel and good maturity on this sophisticated wine. There is a spirit edge, but it works because the fruit is subservient to the maturity, ripeness and richness. The aftertaste is just perfumed.",
    //           price: "$20.0",
    //           imageUrl:
    //             "https://spoonacular.com/productImages/430325-312x231.jpg",
    //           averageRating: 1.0,
    //           ratingCount: 1.0,
    //           score: 0.75,
    //           link: "https://www.amazon.com/Krohn-L%C3%A1grima-Fine-White-Port/dp/B01DCKM8AO?tag=spoonacular-20",
    //         },
    //       ],
    //     },
    //     instructions:
    //       "Pre-heat your oven to 350 F or 176 C. <ol><li>In a large bowl, mix together the wet ingredients (melted butter, mashed bananas, eggs, milk) </li><li> In a separate bowl, combine the dry ingredients (flour, salt, baking soda, Stevia) </li><li> Add the berries to the thoroughly mixed dry ingredients. </li><li> Add the dry ingredients to the wet ingredients. Mix them well, but don't overdo it-- your bread won't be as fluffy. Pour the batter into a greased bread pan and bake for an hour, or until a toothpick inserted in the middle comes out clean.</li></ol> Let cool before removing from the pan",
    //     analyzedInstructions: [
    //       {
    //         name: "",
    //         steps: [
    //           {
    //             number: 1,
    //             step: "Pre-heat your oven to 350 F or 176 C. In a large bowl, mix together the wet ingredients (melted butter, mashed bananas, eggs, milk)  In a separate bowl, combine the dry ingredients (flour, salt, baking soda, Stevia)",
    //             ingredients: [
    //               {
    //                 id: 1009040,
    //                 name: "mashed banana",
    //                 localizedName: "mashed banana",
    //                 image: "mixed-fresh-fruit.jpg",
    //               },
    //               {
    //                 id: 18372,
    //                 name: "baking soda",
    //                 localizedName: "baking soda",
    //                 image: "white-powder.jpg",
    //               },
    //               {
    //                 id: 1001,
    //                 name: "butter",
    //                 localizedName: "butter",
    //                 image: "butter-sliced.jpg",
    //               },
    //               {
    //                 id: 93628,
    //                 name: "stevia",
    //                 localizedName: "stevia",
    //                 image: "stevia.png",
    //               },
    //               {
    //                 id: 20081,
    //                 name: "all purpose flour",
    //                 localizedName: "all purpose flour",
    //                 image: "flour.png",
    //               },
    //               {
    //                 id: 1123,
    //                 name: "egg",
    //                 localizedName: "egg",
    //                 image: "egg.png",
    //               },
    //               {
    //                 id: 1077,
    //                 name: "milk",
    //                 localizedName: "milk",
    //                 image: "milk.png",
    //               },
    //               {
    //                 id: 2047,
    //                 name: "salt",
    //                 localizedName: "salt",
    //                 image: "salt.jpg",
    //               },
    //             ],
    //             equipment: [
    //               {
    //                 id: 404783,
    //                 name: "bowl",
    //                 localizedName: "bowl",
    //                 image: "bowl.jpg",
    //               },
    //               {
    //                 id: 404784,
    //                 name: "oven",
    //                 localizedName: "oven",
    //                 image: "oven.jpg",
    //                 temperature: {
    //                   number: 350.0,
    //                   unit: "Fahrenheit",
    //                 },
    //               },
    //             ],
    //           },
    //           {
    //             number: 2,
    //             step: "Add the berries to the thoroughly mixed dry ingredients.",
    //             ingredients: [
    //               {
    //                 id: 1009054,
    //                 name: "berries",
    //                 localizedName: "berries",
    //                 image: "berries-mixed.jpg",
    //               },
    //             ],
    //             equipment: [],
    //           },
    //           {
    //             number: 3,
    //             step: "Add the dry ingredients to the wet ingredients.",
    //             ingredients: [],
    //             equipment: [],
    //           },
    //           {
    //             number: 4,
    //             step: "Mix them well, but don't overdo it-- your bread won't be as fluffy.",
    //             ingredients: [
    //               {
    //                 id: 18064,
    //                 name: "bread",
    //                 localizedName: "bread",
    //                 image: "white-bread.jpg",
    //               },
    //             ],
    //             equipment: [],
    //           },
    //           {
    //             number: 5,
    //             step: "Pour the batter into a greased bread pan and bake for an hour, or until a toothpick inserted in the middle comes out clean.",
    //             ingredients: [
    //               {
    //                 id: 18064,
    //                 name: "bread",
    //                 localizedName: "bread",
    //                 image: "white-bread.jpg",
    //               },
    //             ],
    //             equipment: [
    //               {
    //                 id: 404715,
    //                 name: "loaf pan",
    //                 localizedName: "loaf pan",
    //                 image: "loaf-pan.png",
    //               },
    //               {
    //                 id: 404644,
    //                 name: "toothpicks",
    //                 localizedName: "toothpicks",
    //                 image: "toothpicks.jpg",
    //               },
    //               {
    //                 id: 404784,
    //                 name: "oven",
    //                 localizedName: "oven",
    //                 image: "oven.jpg",
    //               },
    //             ],
    //           },
    //           {
    //             number: 6,
    //             step: "Let cool before removing from the pan",
    //             ingredients: [],
    //             equipment: [
    //               {
    //                 id: 404645,
    //                 name: "frying pan",
    //                 localizedName: "frying pan",
    //                 image: "pan.png",
    //               },
    //             ],
    //           },
    //         ],
    //       },
    //     ],
    //     originalId: null,
    //     spoonacularScore: 14.092700004577637,
    //     spoonacularSourceUrl:
    //       "https://spoonacular.com/stevia-sweetened-currant-banana-bread-149241",
    //   });

      console.log(recipe);
    } catch (e) {
      console.log(e.message);
    }
  }

  return (
    <>
      <Header />
      <div className="flex  justify-center mt-3">
        <div className=" lg:flex lg:justify-start w-[60vw] flex-col shadow-lg p-4  bg-white  rounded-xl mx-4">
          <h1 className="font-bold text-xl flex lg:w-1/2 justify-start text-#4F8D6D px-1 items-center rounded-3xl ">
            {recipe?.title}
          </h1>
          <p className="mx-3 text-sm text-gray-400   ">Details Below</p>
        </div>
      </div>
      <div className="flex flex-col items-center md:flex-row md:justify-center mx-16 mt-2  ">
        <div className="bg-white w-[80vw] h-[40vh] md:w-[40vw] md:h-[50vh]  shadow-lg rounded-3xl">
          <img
            src={recipe?.image}
            className="object-cover  w-[80vw] h-[40vh] md:w-[50vw] md:h-[50vh] rounded-3xl"
            alt=""
          />
        </div>
        <div className=" flex items-center m-3  ml-10  ">
          <div className="   w-[80vw]  md:w-[15vw] md:h-[50vh] bg-#4F8D6D  rounded-lg shadow-lg p-5">
            <p className="text-2xl font-bold text-white mb-2 ">Summary</p>
            <p className="flex flex-nowrap text-gray-200 ">
              {recipe?.summary
                ?.replace(/<\/?[^>]+(>|$)/g, "")
                .split(" ")
                .slice(0, 50)
                .join(" ") + "..."}
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center md:flex-row md:justify-evenly mt-3  ">
        <div className="w-[80vw] h-[40vh] md:w-[61vw] md:h-[100%] rounded-lg shadow-lg mb-10 bg-white">
          <div>
            <p className="m-6 text-2xl text-#4F8D6D font-semibold">
              Steps To Follow
            </p>
            {recipe?.analyzedInstructions[0]?.steps?.map((steps) => {
              console.log(steps.step);
              return (
                <div className="flex">
                  <p className="ml-6 text-md text-gray-400 ">{steps?.number}.</p>
                  <p className="ml-2 mr-10 text-md text-gray-400">
                    {steps?.step}
                  </p>
                </div>
              );
            })}
          </div>
          <div className="p-6">
            <p className="m-4 text-2xl text-#4F8D6D font-semibold">
              Ingredients
            </p>
            {recipe?.extendedIngredients?.map((ingredient, index) => {
              console.log(ingredient);
              return (
                <span className=" text-md ml-6 text-gray-400">
                  {index + 1}. {ingredient.name}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default RecipeDetails;
