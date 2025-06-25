import React from "react";
import RecipeCard from "./RecipeCard";
import { Link } from "react-router";
import { useTypewriter } from "react-simple-typewriter";
import { Slide, Fade } from "react-awesome-reveal";

const TopRecipes = ({ topRecipes }) => {
  const [text] = useTypewriter({
    words: [
      "Top Recipes",
      "Most Loved Plates",
      "Crave-Worthy Dishes",
      "Tasty Treasures",
      "Best Picks",
    ],
    loop: 0,
  });

  return (
    <div className="w-9/11 mx-auto">
      <h1 className="sm:text-4xl text-2xl font-bold text-center my-5 min-h-[50px] dark:text-white">
        {text}
      </h1>
      <Slide direction="left">
        <Fade duration={1000}>
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-5">
            {topRecipes.map((recipe) => (
              <RecipeCard key={recipe._id} recipe={recipe} />
            ))}
          </div>
        </Fade>
      </Slide>
      <div className="flex justify-center">
        <Link to={"/recipes"}>
          <button className="btn hover:bg-[#00ed64] hover:rounded-full hover:border hover:border-black  mt-5 btn-lg flex w-fit">
            See All Recipes
          </button>
        </Link>
      </div>
    </div>
  );
};

export default TopRecipes;
