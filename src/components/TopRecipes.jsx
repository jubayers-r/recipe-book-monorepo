import React from "react";
import RecipeCard from "./RecipeCard";

const TopRecipes = ({ topRecipes }) => {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center my-5">Top Recipes</h1>
      <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-5">
        {topRecipes.map((recipe) => (
          <RecipeCard recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default TopRecipes;
