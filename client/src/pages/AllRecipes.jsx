import React, { useState } from "react";
import RecipeCard from "../components/RecipeCard";
import { useLoaderData } from "react-router";

const AllRecipes = () => {
  const recipesData = useLoaderData();
  const [type, setType] = useState("Default");
  const [sort, setSort] = useState("Release Time");

  const handleType = (e) => {
    e.preventDefault();
    const value = e.target.value;
    setType(value);
  };

  const handleSort = (e) => {
    e.preventDefault();
    const value = e.target.value;
    setSort(value);
  };

  const [query, setQuery] = useState("");
  const filteredData = recipesData.filter((recipe) =>
    recipe.title.toLowerCase().includes(query)
  );

  return (
    <div>
      <input
        placeholder="Search"
         className="w-full text-center text-xl my-5 px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#2e8251] dark:text-white"
        onChange={(e) => setQuery(e.target.value.toLowerCase())}
      />

      <div className="flex flex-col lg:flex-row justify-between items-center ">
        <h3 className="text-2xl md:text-3xl font-bold text-center mb-5 dark:text-white ">
          Taste Your Buds Out
        </h3>
        <div className="grid md:flex gap-5 py-1 ">
          <div className="flex gap-2 items-center">
            <p className="dark:text-white">Sort by:</p>
            <select
              onChange={handleSort}
              className="bg-white lg:h-10 h-6 rounded-sm px-2 hover:brightness-75 "
            >
              <option>Release Time</option>
              <option>Ascending (A-Z)</option>
              <option>Descending (Z-A)</option>
            </select>
          </div>
          <div className="flex gap-2 items-center">
            <p className="dark:text-white">Filter by:</p>
            <select
              onChange={handleType}
              className="bg-white lg:h-10 h-6 rounded-sm px-2 hover:brightness-75 "
            >
              <option>Default</option>
              {[...new Set(recipesData.map((data) => data.cuisineType))].map(
                (type) => (
                  <option key={type}>{type}</option>
                )
              )}
            </select>
          </div>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5">
        { filteredData.length ?
        filteredData
          .filter((recipe) => {
            // If type is "Default", don't filter; otherwise, filter by cuisineType
            return type === "Default" ? true : recipe.cuisineType === type;
          })
          .sort((a, b) => {
            if (sort === "Ascending (A-Z)") {
              return a.title.localeCompare(b.title);
            } else if (sort === "Descending (Z-A)") {
              return b.title.localeCompare(a.title);
            } else {
              return 0; // No sorting (e.g., "Time" or "Release Time")
            }
          })
          .map((recipe) => (
            <RecipeCard key={recipe._id} recipe={recipe} />
          )) : <div className="w-full text-center col-span-5">
    <h3 className="text-2xl font-semibold dark:text-white">No Data Found</h3>
  </div>
        }
      </div>
    </div>
  );
};

export default AllRecipes;
