import React from "react";
import RecipeCard from "./RecipeCard";
import { Link } from "react-router";

const TopRecipes = ({ topRecipes }) => {
  return (
    <div className="w-9/11 mx-auto">
      <h1 className="text-4xl font-bold text-center my-5">Top Recipes</h1>
      <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-5">
        {topRecipes.map((recipe) => (
          <RecipeCard recipe={recipe} />
        ))}
      </div>
      <div className="flex justify-center">
        <Link to={"/recipes"}>
        <button
          className="btn hover:bg-[#00ed64] hover:rounded-full hover:border hover:border-black  mt-5 btn-lg flex w-fit"
        >
          See All Recipes
        </button>
        </Link>
      </div>
    </div>
  );
};

export default TopRecipes;
