import React, { useState } from "react";
import RecipeCard from "../components/RecipeCard";
import { useLoaderData } from "react-router";

const AllRecipes = () => {
  const recipesData = useLoaderData();
  const [type, setType] = useState("Default");

  const handleType = (e) => {
    e.preventDefault();
    const value = e.target.value;
    setType(value);
  };

  return (
    <>
      <div className="flex flex-col sm:flex-row  w-full mx-auto justify-between items-center">
        <h3 className="text-3xl font-bold text-center my-5">
          Taste Your Buds Out
        </h3>
        <div className="flex gap-2 items-center">
          <p>Sort by:</p>
          <select
            onChange={handleType}
            className="bg-gray-200 h-10 rounded-sm px-2 hover:brightness-75"
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

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {type == "Default"
          ? recipesData.map((recipe) => (
              <RecipeCard key={recipe._id} recipe={recipe} />
            ))
          : recipesData
              .filter((recipe) => recipe.cuisineType == type)
              .map((recipe, index) => (
                <RecipeCard key={index} recipe={recipe} />
              ))}
      </div>
    </>
  );
};

export default AllRecipes;
