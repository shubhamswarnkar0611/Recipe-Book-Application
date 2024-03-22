import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import Header from "../components/Header";
import Footer from "../components/Footer";
import recipeService from "../services/RecipeApi";

const Home = () => {
  const [recipes, setRecipes] = useState([]);
  const [searchText, setSearchText] = useState("");

  async function getRecipes() {
    try {
    //   const data = await recipeService.getAllRecipe();
    //   const json = await data.json();
    //   setRecipes(json);
    setRecipes([
        {
            "id": 149241,
            "title": "Stevia-Sweetened Currant Banana Bread",
            "image": "https://spoonacular.com/recipeImages/149241-312x231.jpg",
            "imageType": "jpg",
            "calories": 186,
            "protein": "5g",
            "fat": "8g",
            "carbs": "22g"
        },
        {
            "id": 627987,
            "title": "onion pakoda recipe",
            "image": "https://spoonacular.com/recipeImages/627987-312x231.jpg",
            "imageType": "jpg",
            "calories": 218,
            "protein": "10g",
            "fat": "6g",
            "carbs": "26g"
        },
        {
            "id": 633569,
            "title": "Baked Crusty Chicken",
            "image": "https://spoonacular.com/recipeImages/633569-312x231.jpg",
            "imageType": "jpg",
            "calories": 367,
            "protein": "26g",
            "fat": "24g",
            "carbs": "10g"
        },
        {
            "id": 635248,
            "title": "Blackberry Walnut Cookies",
            "image": "https://spoonacular.com/recipeImages/635248-312x231.jpg",
            "imageType": "jpg",
            "calories": 142,
            "protein": "2g",
            "fat": "6g",
            "carbs": "19g"
        },
        {
            "id": 636178,
            "title": "Broccoli Cheddar Soup, A Panera Bread Co. Copycat",
            "image": "https://spoonacular.com/recipeImages/636178-312x231.jpg",
            "imageType": "jpg",
            "calories": 611,
            "protein": "25g",
            "fat": "46g",
            "carbs": "24g"
        },
        {
            "id": 636392,
            "title": "Buckwheat Crepes",
            "image": "https://spoonacular.com/recipeImages/636392-312x231.jpg",
            "imageType": "jpg",
            "calories": 374,
            "protein": "13g",
            "fat": "14g",
            "carbs": "48g"
        },
        {
            "id": 636574,
            "title": "Buttermilk Skillet Fried Chicken",
            "image": "https://spoonacular.com/recipeImages/636574-312x231.jpg",
            "imageType": "jpg",
            "calories": 657,
            "protein": "49g",
            "fat": "43g",
            "carbs": "14g"
        },
        {
            "id": 637184,
            "title": "Carrot Cake Pancakes",
            "image": "https://spoonacular.com/recipeImages/637184-312x231.jpg",
            "imageType": "jpg",
            "calories": 143,
            "protein": "4g",
            "fat": "5g",
            "carbs": "19g"
        },
        {
            "id": 637932,
            "title": "Chicken and White Bean Chili",
            "image": "https://spoonacular.com/recipeImages/637932-312x231.jpg",
            "imageType": "jpg",
            "calories": 433,
            "protein": "24g",
            "fat": "29g",
            "carbs": "15g"
        },
        {
            "id": 641974,
            "title": "Easy Gift Lasagna",
            "image": "https://spoonacular.com/recipeImages/641974-312x231.jpg",
            "imageType": "jpg",
            "calories": 307,
            "protein": "17g",
            "fat": "18g",
            "carbs": "18g"
        },
        {
            "id": 642583,
            "title": "Farfalle with Peas, Ham and Cream",
            "image": "https://spoonacular.com/recipeImages/642583-312x231.jpg",
            "imageType": "jpg",
            "calories": 397,
            "protein": "15g",
            "fat": "16g",
            "carbs": "44g"
        },
        {
            "id": 654571,
            "title": "Panna Cotta with Raspberry and Orange Sauce",
            "image": "https://spoonacular.com/recipeImages/654571-312x231.jpg",
            "imageType": "jpg",
            "calories": 396,
            "protein": "8g",
            "fat": "27g",
            "carbs": "28g"
        },
        {
            "id": 657972,
            "title": "Raw Chocolate Energy Bars",
            "image": "https://spoonacular.com/recipeImages/657972-312x231.jpg",
            "imageType": "jpg",
            "calories": 190,
            "protein": "6g",
            "fat": "10g",
            "carbs": "20g"
        },
        {
            "id": 660261,
            "title": "Slow Cooked Applesauce",
            "image": "https://spoonacular.com/recipeImages/660261-312x231.jpg",
            "imageType": "jpg",
            "calories": 62,
            "protein": "0g",
            "fat": "0g",
            "carbs": "14g"
        },
        {
            "id": 660292,
            "title": "Slow Cooker Minestrone Soup",
            "image": "https://spoonacular.com/recipeImages/660292-312x231.jpg",
            "imageType": "jpg",
            "calories": 148,
            "protein": "7g",
            "fat": "2g",
            "carbs": "22g"
        },
        {
            "id": 661480,
            "title": "St. Lucia saffron buns",
            "image": "https://spoonacular.com/recipeImages/661480-312x231.jpg",
            "imageType": "jpg",
            "calories": 230,
            "protein": "7g",
            "fat": "5g",
            "carbs": "37g"
        },
        {
            "id": 665019,
            "title": "Watermelon Leaf Lettuce Salad With Light Feta",
            "image": "https://spoonacular.com/recipeImages/665019-312x231.jpg",
            "imageType": "jpg",
            "calories": 248,
            "protein": "5g",
            "fat": "18g",
            "carbs": "16g"
        },
        {
            "id": 679509,
            "title": "Not Your Normal Seven Layer Dip",
            "image": "https://spoonacular.com/recipeImages/679509-312x231.jpg",
            "imageType": "jpg",
            "calories": 163,
            "protein": "7g",
            "fat": "6g",
            "carbs": "13g"
        },
        {
            "id": 715397,
            "title": "Cheesy Chicken and Rice Casserole",
            "image": "https://spoonacular.com/recipeImages/715397-312x231.jpg",
            "imageType": "jpg",
            "calories": 464,
            "protein": "31g",
            "fat": "28g",
            "carbs": "21g"
        },
        {
            "id": 1459207,
            "title": "Easy Sheet Pan Pancakes",
            "image": "https://spoonacular.com/recipeImages/1459207-312x231.jpg",
            "imageType": "jpg",
            "calories": 218,
            "protein": "6g",
            "fat": "8g",
            "carbs": "28g"
        }
    ])

    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    getRecipes();
  }, []);

  

  const filterRecipe = async (e) => {
    e.preventDefault();
    const search = document.getElementById("search").value;
    try {
      if (search === "") {
        return getRecipes();
      } else {
        const response = await recipeService.searchRecipe(search);
        const searchedRecipe = await response.json();
        setRecipes(searchedRecipe.results);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Header />
      <div className="flex flex-col lg:flex-row items-center lg:items-start">
        <div className="sticky top-0">
          <div className="relative w-80 m-10">
            <label htmlFor="search" className="sr-only">
              Search
            </label>

            <input
              type="text"
              id="search"
              placeholder="Search for..."
              className="w-full rounded-md py-2.5 pe-10 shadow-sm sm:text-sm px-2 bg-gray-150 text-gray-700 hover:shadow-xl"
            />
            <span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
              <button
                type="button"
                className="text-gray-200 hover:text-gray-200"
                onClick={filterRecipe}
              >
                <span className="sr-only">Search</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  />
                </svg>
              </button>
            </span>
          </div>
          <div className="bg-#4F8D6D text-white text-xl p-4 h-[50vh] w-[323px] mx-10 rounded-md lg:flex justify-center items-center hidden">
            "Search, savor, and nourish. With our recipe search feature, explore
            a world of culinary wonders at your fingertips. Uncover the
            nutritional insights behind every dish, empowering you to make
            delicious and healthy choices effortlessly."
          </div>
        </div>
        <div className="flex flex-wrap justify-center w-2/3 m-4 rounded-md overflow-hidden p-3">
          {recipes.map((recipe) => (
            <Card recipe={recipe} key={recipe.id} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
