import React from "react";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import recipeService from "../services/RecipeApi";
import { useParams } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import Footer from "../components/Footer";

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

      console.log(recipe);
    } catch (e) {
      toast.error(e.message);
    }
  }

  return (
    <>
      <Header />
      <div className="flex  justify-center mt-3">
        <Toaster />
        <div className=" lg:flex lg:justify-start w-[80\5vw] lg:w-[60vw] flex-col shadow-lg p-4  bg-white  rounded-xl mx-4">
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
        <div className=" flex items-center m-3  mx-10  lg:ml-10 ">
          <div className="   w-[80vw]  md:w-[30vw] lg:w-[20vw] xl:w-[15vw] md:h-[50vh] bg-#4F8D6D  rounded-lg shadow-lg p-5">
            <p className="text-2xl font-bold text-white mb-2 ">Summary</p>
            <p className="flex flex-nowrap text-gray-200 ">
              {recipe?.summary
                ?.replace(/<\/?[^>]+(>|$)/g, "")
                .split(" ")
                .slice(0, 50)
                .join(" ") + " ..."}
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center md:flex-row md:justify-evenly mt-3  ">
        <div className="w-[80vw] h-[100%] md:w-[61vw] md:h-[100%] rounded-lg shadow-lg mb-10 bg-white">
          <div>
            <p className="m-6 text-2xl text-#4F8D6D font-semibold">
              Steps To Follow
            </p>
            {recipe?.analyzedInstructions[0]?.steps?.map((steps) => {
              console.log(steps.step);
              return (
                <div className="flex">
                  <p className="ml-6 text-md text-gray-400 ">
                    {steps?.number}.
                  </p>
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
      <Footer/>
    </>
  );
};

export default RecipeDetails;
