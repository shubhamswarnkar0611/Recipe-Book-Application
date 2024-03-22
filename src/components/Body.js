import React from "react";
import Card from "./Card";
import { useState, useEffect } from "react";



const Body = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [filterRestaurants, setFilterRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  async function getRestaurants() {
    let data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    let json = await data.json();
    console.log(json?.data?.cards[1].card?.card?.gridElements?.infoWithStyle?.restaurants);
    setRestaurants(
      json?.data?.cards[1].card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilterRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

  
  }

  useEffect(() => {
    getRestaurants();
  }, []);


  function filterRestaurant(e) {
    setSearchText(e.target.value);
   
  }

  useEffect(()=>{
    
    let filterData = filterRestaurants.filter((restaurant)=>{
      // restaurant?.info?.name.toLowerCase().includes(searchText.toLowerCase()) 
      return restaurant?.info?.name.toLowerCase().includes(searchText.toLowerCase()) 
    })

    setRestaurants(filterData);

  },[searchText])

  return (
    <>
      <div className="flex justify-center">
        <div className="relative w-80 m-8  ">
          <label for="Search" className="sr-only ">
            {" "}
            Search{" "}
          </label>

          <input
            type="text"
            id="Search"
            placeholder="Search for..."
            className="w-full rounded-md py-2.5 pe-10 shadow-sm sm:text-sm px-2 bg-gray-150 text-gray-700 hover:shadow-xl "
            onChange={filterRestaurant}
          />

          <span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
            <button type="button" className="text-gray-200 hover:text-gray-200">
              <span className="sr-only">Search</span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="h-4 w-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </button>
          </span>
        </div>
      </div>
      <div className="flex bg-gray-100 flex-wrap justify-center ">
        {restaurants.map((restaurant) => {
          return <Card restaurant={restaurant} key={restaurant.info.id} />;
        })}
      </div>
    </>
  );
};

export default Body;
