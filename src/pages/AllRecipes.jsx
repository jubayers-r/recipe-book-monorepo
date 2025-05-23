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
    <div className="w-9/11 mx-auto">
      <div className="flex flex-col sm:flex-row justify-between items-center ">
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

      <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5">
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
    </div>
  );
};

export default AllRecipes;
