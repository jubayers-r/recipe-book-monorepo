import React from "react";
import { CiHeart } from "react-icons/ci";
import { LiaComments } from "react-icons/lia";
import { FaShareAlt } from "react-icons/fa";
import { Link } from "react-router";

const RecipeCard = ({ recipe }) => {
  const {
    image,
    title,
    ingredients,
    instructions,
    cuisineType,
    preparationTime,
    category,
    likeCount,
    _id
  } = recipe;
  // truncation function for show more ux
  const maxWords = 12;
  const truncatedInstructions = instructions
    ? instructions.split(" ").slice(0, maxWords).join(" ") +
      (instructions.split(" ").length > maxWords ? "..." : "")
    : "No instructions provided.";

  return (
    <div className="card bg-base-100 shadow-sm">
      <figure className="w-full h-50">
        <img src={image} alt={title} className=" object-cover" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {title}
          <div className="badge badge-secondary">{cuisineType}</div>
        </h2>
        <div className="card-actions justify-end">
        {category.map((category, index) => (
                <p key={index} className="font-semibold border p-1 rounded-lg hover:bg-green-600 hover:text-white text-center">
                  {category}
                </p>
              ))}
        </div>
        <p>{truncatedInstructions}</p>
      </div>
      <div className="grid grid-cols-2 gap-2 justify-center w-[80%] mx-auto">
        <div className="btn ">
          <CiHeart size={25} /> {likeCount}
        </div>
        <div className="btn ">
          <LiaComments size={25} /> Discussion
        </div>
      </div>
      <div className="flex justify-center my-2">
        <Link to={`/recipeDetails/${_id}`}>
          <button className="btn w-fit">Read Full Recipe</button>
        </Link>
      </div>
    </div>
  );
};

export default RecipeCard;
