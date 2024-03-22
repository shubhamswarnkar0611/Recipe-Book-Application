import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import Header from "../components/Header";
import Footer from "../components/Footer";
import recipeService from "../services/RecipeApi";
import toast, { Toaster } from 'react-hot-toast';
import Footer from "../components/Footer";

const Home = () => {
  const [recipes, setRecipes] = useState([]);
  const [searchText, setSearchText] = useState("");

  async function getRecipes() {
    try {
        const data = await recipeService.getAllRecipe();
        const json = await data.json();
        setRecipes(json);
    
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
        console.log(searchedRecipe.results);
        setRecipes(searchedRecipe.results);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  async function handleFilterRecipe(item) {
    try {
      const response = await recipeService.searchRecipe(item);
      const filterRecipe = await response.json();
      setRecipes(filterRecipe.results);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <Header />
      <div className="flex flex-col lg:flex-row items-center lg:items-start">
        <div className="sticky top-0">
        <Toaster/>
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
          <div className=" lg:flex lg:justify-start  lg:w-[60vw] flex-col shadow-lg p-1  bg-white rounded-full mx-4">
            <div className="flex justify-evenly p-3">
              <h1 className="font-bold text-md lg:text-xl  text-#323A39   rounded-3xl ">
                Filter:
              </h1>
              <button
                onClick={() => handleFilterRecipe("cake")}
                className="font-bold text-md    text-#323A39 hover:text-#43BEAB mx-2  rounded-3xl "
              >
                Cake
              </button>
              <button
                onClick={() => handleFilterRecipe("chicken")}
                className="font-bold text-md    text-#323A39 hover:text-#43BEAB mx-2  rounded-3xl  "
              >
                Chicken
              </button>
              <button
                onClick={() => handleFilterRecipe("biryani")}
                className="font-bold text-md    text-#323A39 hover:text-#43BEAB mx-2  rounded-3xl "
              >
                Biryani
              </button>
              <button
                onClick={() => handleFilterRecipe("pasta")}
                className="font-bold text-md  text-#323A39 hover:text-#43BEAB mx-2  rounded-3xl "
              >
                Pasta
              </button>
            </div>
          </div>
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
