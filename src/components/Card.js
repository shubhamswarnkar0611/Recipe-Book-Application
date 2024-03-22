import React from "react";
import { Link } from "react-router-dom"; 

const Card = (props) => {
  return (
    <div className=" w-[50vw] xs:w-[36vw] sm:w-[26vw] md:w-[24vw] lg:w-[21vw] xl:w-[18vw] 2xl:w-[15vw] m-4 bg-white  rounded-lg ">
      <Link
        to={`/recipe-details/${props?.recipe?.id}`}
        className="block rounded-lg p-3 shadow-md  transition delay-150 hover:shadow-lg hover:shadow-white  "
      >
        <div className="flex justify-center">
          <img
            alt="img"
            src={props?.recipe?.image}
            className="h-[15vh] w-[30vw] rounded-md object-cover  "
          />
        </div>

        <div className="mt-2 h-[15vh] flex  flex-col justify-between">
          <dl>
            <div>
              <dd className="text-sm text-#4F8D6D">
                Calories {props?.recipe?.calories}
              </dd>
            </div>

            <div>
              <dd className="font-medium text-#323A39">{props?.recipe?.title}</dd>
            </div>
          </dl>

          <div className="h-[5vh] flex items-center justify-between ">
            <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
              <div className="mt-1.5 sm:mt-0">
                <p className="text-#4F8D6D text-sm font-mono">Carbs</p>

                <p className=" text-sm font-mono text-gray-500">
                  {props?.recipe?.carbs}
                </p>
              </div>
            </div>

            <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
              <div className="mt-1.5 sm:mt-0">
              <p className="text-#4F8D6D text-sm font-mono">Fat</p>
                <p className=" text-sm font-mono text-gray-500">{props?.recipe?.fat}</p>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
